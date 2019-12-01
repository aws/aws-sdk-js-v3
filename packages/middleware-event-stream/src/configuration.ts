import {
  Encoder,
  Decoder,
  EventStreamMarshaller,
  EventStreamRequestSigner,
  EventStreamSerdeProvider,
  EventSigner
} from "@aws-sdk/types";

export interface EventStreamInputConfig {}

export type EventStreamResolvedConfig = {
  eventSigner: EventSigner;
  eventStreamMarshaller: EventStreamMarshaller;
  eventStreamSigner: EventStreamRequestSigner;
};

interface PreviouslyResolved {
  utf8Encoder: Encoder;
  utf8Decoder: Decoder;
  signer: any; //Should be EventSigner; But this would unblock the client
  eventStreamSerdeProvider: EventStreamSerdeProvider;
}

export function resolveEventStreamConfig<T>(
  input: T & PreviouslyResolved & EventStreamInputConfig
): T & EventStreamResolvedConfig {
  const eventSigner = input.signer;
  const [
    eventStreamMarshaller,
    eventStreamSigner
  ] = input.eventStreamSerdeProvider({ ...input, eventSigner });
  return {
    ...input,
    eventSigner,
    eventStreamMarshaller,
    eventStreamSigner
  };
}
