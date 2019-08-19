import { DeleteEndpointInput } from "../shapes/DeleteEndpointInput";
import { DeleteEndpointOutput } from "../shapes/DeleteEndpointOutput";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { InternalErrorException } from "../shapes/InternalErrorException";
import { AuthorizationErrorException } from "../shapes/AuthorizationErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteEndpoint: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteEndpoint",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteEndpointInput
  },
  output: {
    shape: DeleteEndpointOutput
  },
  errors: [
    {
      shape: InvalidParameterException
    },
    {
      shape: InternalErrorException
    },
    {
      shape: AuthorizationErrorException
    }
  ]
};
