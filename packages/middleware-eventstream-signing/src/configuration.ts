import {
  Encoder,
  Decoder,
  EventStreamRequestSigner,
  EventStreamSignerProvider,
  EventSigner
} from "@aws-sdk/types";

export interface EventStreamInputConfig {}

export type EventStreamResolvedConfig = {
  eventSigner: EventSigner;
  eventStreamSigner: EventStreamRequestSigner;
};

interface PreviouslyResolved {
  utf8Encoder: Encoder;
  utf8Decoder: Decoder;
  signer: any; //Should be Provider<EventSigner>; But this would unblock the client
  eventStreamSignerProvider: EventStreamSignerProvider;
}

export function resolveEventStreamConfig<T>(
  input: T & PreviouslyResolved & EventStreamInputConfig
): T & EventStreamResolvedConfig {
  const eventSigner = input.signer;
  const eventStreamSigner = input.eventStreamSignerProvider({
    ...input,
    eventSigner
  });
  return {
    ...input,
    eventSigner,
    eventStreamSigner
  };
}
