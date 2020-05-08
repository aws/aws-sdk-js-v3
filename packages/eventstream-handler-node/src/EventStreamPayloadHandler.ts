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
  HandlerExecutionContext,
  FinalizeHandlerArguments,
  FinalizeHandler,
  FinalizeHandlerOutput
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
    next: FinalizeHandler<any, T>,
    args: FinalizeHandlerArguments<any>,
    context: HandlerExecutionContext = {} as any
  ): Promise<FinalizeHandlerOutput<T>> {
    const request = args.request as HttpRequest;
    const { body: payload } = request;
    if (!(payload instanceof Readable)) {
      throw new Error("Eventstream payload must be a Readable stream.");
    }
    const payloadStream = payload as Readable;
    request.body = new PassThrough({
      objectMode: true
    });
    let result: FinalizeHandlerOutput<any>;
    try {
      result = await next(args);
    } catch (e) {
      request.body.end();
      throw e;
    }
    const match = (request.headers["authorization"] || "").match(
      /Signature=([\w]+)$/
    );
    const priorSignature = (match || [])[1];
    const signingStream = new EventSigningStream({
      priorSignature,
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
