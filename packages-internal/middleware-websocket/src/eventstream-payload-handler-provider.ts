import { Decoder, Encoder, EventStreamPayloadHandlerProvider, MessageSigner, Provider } from "@smithy/types";

import { EventStreamPayloadHandler } from "./EventStreamPayloadHandler";

/**
 * @internal
 */
export const eventStreamPayloadHandlerProvider: EventStreamPayloadHandlerProvider = (options: {
  utf8Encoder: Encoder;
  utf8Decoder: Decoder;
  messageSigner: Provider<MessageSigner>;
  systemClockOffset?: number;
}) => new EventStreamPayloadHandler(options);
