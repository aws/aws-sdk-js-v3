import {
  Decoder,
  Encoder,
  EventSigner,
  EventStreamPayloadHandler,
  EventStreamPayloadHandlerProvider,
} from "@aws-sdk/types";

export interface EventStreamInputConfig {}

export type EventStreamResolvedConfig = {
  /**
   * A signer that signs the event of a event stream
   * @internal
   */
  eventSigner: EventSigner;
  /**
   * A handler that control the eventstream payload flow and sign the payload after payload stream starting to flow.
   * @internal
   */
  eventStreamPayloadHandler: EventStreamPayloadHandler;
};

interface PreviouslyResolved {
  utf8Encoder: Encoder;
  utf8Decoder: Decoder;
  signer: any; //Should be Provider<EventSigner>; But this would unblock the client
  eventStreamPayloadHandlerProvider: EventStreamPayloadHandlerProvider;
}

export function resolveEventStreamConfig<T>(
  input: T & PreviouslyResolved & EventStreamInputConfig
): T & EventStreamResolvedConfig {
  const eventSigner = input.signer;
  const eventStreamPayloadHandler = input.eventStreamPayloadHandlerProvider({
    ...input,
    eventSigner,
  });
  return {
    ...input,
    eventSigner,
    eventStreamPayloadHandler,
  };
}
