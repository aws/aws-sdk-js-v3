import { EventStreamCodec } from "@aws-sdk/eventstream-codec";
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

import { getEventSigningTransformStream } from "./get-event-signing-stream";

export interface EventStreamPayloadHandlerOptions {
  eventSigner: Provider<EventSigner>;
  utf8Encoder: Encoder;
  utf8Decoder: Decoder;
}

/**
 * A handler that control the eventstream payload flow:
 * 1. Pause stream for initial request.
 * 2. Close the stream if initial request fails.
 * 3. Start piping payload when connection is established.
 * 4. Sign the payload after payload stream starting to flow.
 */
export class EventStreamPayloadHandler implements IEventStreamPayloadHandler {
  private readonly eventSigner: Provider<EventSigner>;
  private readonly eventStreamCodec: EventStreamCodec;

  constructor(options: EventStreamPayloadHandlerOptions) {
    this.eventSigner = options.eventSigner;
    this.eventStreamCodec = new EventStreamCodec(options.utf8Encoder, options.utf8Decoder);
  }

  async handle<T extends MetadataBearer>(
    next: FinalizeHandler<any, T>,
    args: FinalizeHandlerArguments<any>,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    context: HandlerExecutionContext = {} as any
  ): Promise<FinalizeHandlerOutput<T>> {
    const request = args.request as HttpRequest;
    const { body: payload, headers, query } = request;

    if (!(payload instanceof ReadableStream)) {
      throw new Error("Eventstream payload must be a ReadableStream.");
    }

    const placeHolderStream = new TransformStream();
    request.body = placeHolderStream.readable;

    let result: FinalizeHandlerOutput<any>;
    try {
      result = await next(args);
    } catch (e) {
      // Close the payload stream otherwise the retry would hang
      // because of the previous connection.
      request.body.cancel();
      throw e;
    }

    const match = (headers["authorization"] || "").match(/Signature=([\w]+)$/);
    // Sign the eventstream based on the signature from initial request.
    const priorSignature = (match || [])[1] || (query && (query["X-Amz-Signature"] as string)) || "";
    const signingStream = getEventSigningTransformStream(
      priorSignature,
      await this.eventSigner(),
      this.eventStreamCodec
    );

    const signedPayload = payload.pipeThrough(signingStream);
    signedPayload.pipeThrough(placeHolderStream);

    return result;
  }
}
