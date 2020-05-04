import {
  EventStreamPayloadHandler as IEventStreamPayloadHandler,
  MetadataBearer,
  BuildHandler,
  BuildHandlerArguments,
  BuildHandlerOutput,
  Provider,
  EventSigner,
  Encoder,
  Decoder,
  HttpRequest,
  HandlerExecutionContext
} from "@aws-sdk/types";
import { EventStreamMarshaller as EventMarshaller } from "@aws-sdk/eventstream-marshaller";
import { Readable, PassThrough, pipeline } from "stream";
import { EventSigningStream } from "./EventSigningStream";

export interface EventStreamPayloadHandlerOptions {
  eventSigner: Provider<EventSigner>;
  utf8Encoder: Encoder;
  utf8Decoder: Decoder;
}

export class EventStreamPayloadHandler implements IEventStreamPayloadHandler {
  private readonly eventSigner: Provider<EventSigner>;
  private readonly eventMarshaller: EventMarshaller;
  constructor(options: EventStreamPayloadHandlerOptions) {
    this.eventSigner = options.eventSigner;
    this.eventMarshaller = new EventMarshaller(
      options.utf8Encoder,
      options.utf8Decoder
    );
  }

  async handle<T extends MetadataBearer>(
    next: BuildHandler<any, T>,
    args: BuildHandlerArguments<any>,
    context: HandlerExecutionContext = {} as any
  ): Promise<BuildHandlerOutput<T>> {
    const request = args.request as HttpRequest;
    const { body: payload } = request;
    if (!(payload instanceof Readable)) {
      throw new Error("Eventstream payload must be a Readable stream.");
    }
    const payloadStream = payload as Readable;
    request.body = new PassThrough({
      objectMode: true
    });
    const result = await next(args);
    if (!context.signature) {
      throw new Error(
        "Initial request signature is not available in eventstream handler."
      );
    }
    const signingStream = new EventSigningStream({
      priorSignature: context.signature,
      eventMarshaller: this.eventMarshaller,
      eventSigner: await this.eventSigner()
    });
    pipeline(payloadStream, signingStream, request.body, err => {
      if (err) {
        throw err;
      }
    });
    return result;
  }
}
