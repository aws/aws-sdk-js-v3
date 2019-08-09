import { DeleteEndpointConfigInput } from "./DeleteEndpointConfigInput";
import { DeleteEndpointConfigOutput } from "./DeleteEndpointConfigOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeleteEndpointConfig: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteEndpointConfig",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteEndpointConfigInput
  },
  output: {
    shape: DeleteEndpointConfigOutput
  },
  errors: []
};
