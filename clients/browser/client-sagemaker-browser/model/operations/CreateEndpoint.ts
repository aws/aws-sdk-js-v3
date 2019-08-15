import { CreateEndpointInput } from "../shapes/CreateEndpointInput";
import { CreateEndpointOutput } from "../shapes/CreateEndpointOutput";
import { ResourceLimitExceeded } from "../shapes/ResourceLimitExceeded";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
