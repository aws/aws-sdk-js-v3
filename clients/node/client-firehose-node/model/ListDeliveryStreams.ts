import { ListDeliveryStreamsInput } from "./ListDeliveryStreamsInput";
import { ListDeliveryStreamsOutput } from "./ListDeliveryStreamsOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ListDeliveryStreams: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListDeliveryStreams",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListDeliveryStreamsInput
  },
  output: {
    shape: ListDeliveryStreamsOutput
  },
  errors: []
};
