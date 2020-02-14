import {
  Decoder,
  Encoder,
  EventStreamMarshaller,
  EventStreamSerdeProvider
} from "@aws-sdk/types";
export interface EventStreamSerdeInputConfig {}

export interface EventStreamSerdeResolvedConfig {
  eventStreamMarshaller: EventStreamMarshaller;
}

interface PreviouslyResolved {
  utf8Encoder: Encoder;
  utf8Decoder: Decoder;
  eventStreamSerdeProvider: EventStreamSerdeProvider;
}

export function resolveEventStreamSerdeConfig<T>(
  input: T & PreviouslyResolved & EventStreamSerdeInputConfig
): T & EventStreamSerdeResolvedConfig {
  return {
    ...input,
    eventStreamMarshaller: input.eventStreamSerdeProvider({ ...input })
  };
}
