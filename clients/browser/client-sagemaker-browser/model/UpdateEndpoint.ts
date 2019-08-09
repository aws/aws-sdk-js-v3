import { UpdateEndpointInput } from "./UpdateEndpointInput";
import { UpdateEndpointOutput } from "./UpdateEndpointOutput";
import { ResourceLimitExceeded } from "./ResourceLimitExceeded";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const UpdateEndpoint: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateEndpoint",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateEndpointInput
  },
  output: {
    shape: UpdateEndpointOutput
  },
  errors: [
    {
      shape: ResourceLimitExceeded
    }
  ]
};
