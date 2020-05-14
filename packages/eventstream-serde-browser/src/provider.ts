import { Encoder, Decoder, EventSigner, EventStreamSerdeProvider, Provider } from "@aws-sdk/types";
import { EventStreamMarshaller } from "./EventStreamMarshaller";

/** browser event stream serde utils provider */
export const eventStreamSerdeProvider: EventStreamSerdeProvider = (options: {
  utf8Encoder: Encoder;
  utf8Decoder: Decoder;
  eventSigner: EventSigner | Provider<EventSigner>;
}) => new EventStreamMarshaller(options);
