import { CreateEndpointConfigInput } from "./CreateEndpointConfigInput";
import { CreateEndpointConfigOutput } from "./CreateEndpointConfigOutput";
import { ResourceLimitExceeded } from "./ResourceLimitExceeded";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CreateEndpointConfig: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateEndpointConfig",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateEndpointConfigInput
  },
  output: {
    shape: CreateEndpointConfigOutput
  },
  errors: [
    {
      shape: ResourceLimitExceeded
    }
  ]
};
