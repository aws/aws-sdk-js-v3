import { CreateEndpointInput } from "./CreateEndpointInput";
import { CreateEndpointOutput } from "./CreateEndpointOutput";
import { ResourceLimitExceeded } from "./ResourceLimitExceeded";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CreateEndpoint: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateEndpoint",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateEndpointInput
  },
  output: {
    shape: CreateEndpointOutput
  },
  errors: [
    {
      shape: ResourceLimitExceeded
    }
  ]
};
