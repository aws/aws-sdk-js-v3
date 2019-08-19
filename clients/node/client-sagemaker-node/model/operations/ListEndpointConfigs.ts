import { ListEndpointConfigsInput } from "../shapes/ListEndpointConfigsInput";
import { ListEndpointConfigsOutput } from "../shapes/ListEndpointConfigsOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListEndpointConfigs: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListEndpointConfigs",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListEndpointConfigsInput
  },
  output: {
    shape: ListEndpointConfigsOutput
  },
  errors: []
};
