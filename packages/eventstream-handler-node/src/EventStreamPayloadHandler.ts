import { EventStreamMarshaller as EventMarshaller } from "@aws-sdk/eventstream-marshaller";
import {
  Decoder,
  Encoder,
  EventSigner,
  EventStreamPayloadHandler as IEventStreamPayloadHandler,
  FinalizeHandler,
  FinalizeHandlerArguments,
  FinalizeHandlerOutput,
  HandlerExecutionContext,
  HttpRequest,
  MetadataBearer,
  Provider,
} from "@aws-sdk/types";
import { PassThrough, pipeline, Readable } from "stream";

import { EventSigningStream } from "./EventSigningStream";

export interface EventStreamPayloadHandlerOptions {
  eventSigner: Provider<EventSigner>;
  utf8Encoder: Encoder;
  utf8Decoder: Decoder;
}

/**
 * A handler that control the eventstream payload flow:
 * 1. Pause stream for initial attempt.
 * 2. Close the stream is attempt fails.
 * 3. Start piping payload when connection is established.
 * 4. Sign the payload after payload stream starting to flow.
 */
export class EventStreamPayloadHandler implements IEventStreamPayloadHandler {
  private readonly eventSigner: Provider<EventSigner>;
  private readonly eventMarshaller: EventMarshaller;
  constructor(options: EventStreamPayloadHandlerOptions) {
    this.eventSigner = options.eventSigner;
    this.eventMarshaller = new EventMarshaller(options.utf8Encoder, options.utf8Decoder);
  }

  async handle<T extends MetadataBearer>(
    next: FinalizeHandler<any, T>,
    args: FinalizeHandlerArguments<any>,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    context: HandlerExecutionContext = {} as any
  ): Promise<FinalizeHandlerOutput<T>> {
    const request = args.request as HttpRequest;
    const { body: payload } = request;
    if (!(payload instanceof Readable)) {
      throw new Error("Eventstream payload must be a Readable stream.");
    }
    const payloadStream = payload as Readable;
    request.body = new PassThrough({
      objectMode: true,
    });
    let result: FinalizeHandlerOutput<any>;
    try {
      result = await next(args);
    } catch (e) {
      // Close the payload stream otherwise the retry would hang
      // because of the previous connection.
      request.body.end();
      throw e;
    }
    // If response is successful, start piping the payload stream
    const match = (request.headers["authorization"] || "").match(/Signature=([\w]+)$/);
    // Sign the eventstream based on the signature from initial request.
    const priorSignature = (match || [])[1];
    const signingStream = new EventSigningStream({
      priorSignature,
      eventMarshaller: this.eventMarshaller,
      eventSigner: await this.eventSigner(),
    });
    pipeline(payloadStream, signingStream, request.body, (err) => {
      if (err) {
        throw err;
      }
    });
    return result;
  }
}
