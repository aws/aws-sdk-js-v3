import { DeleteUserPoolClientInput } from "../shapes/DeleteUserPoolClientInput";
import { DeleteUserPoolClientOutput } from "../shapes/DeleteUserPoolClientOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { NotAuthorizedException } from "../shapes/NotAuthorizedException";
import { InternalErrorException } from "../shapes/InternalErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteUserPoolClient: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteUserPoolClient",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteUserPoolClientInput
  },
  output: {
    shape: DeleteUserPoolClientOutput
  },
  errors: [
    {
      shape: ResourceNotFoundException
    },
    {
      shape: InvalidParameterException
    },
    {
      shape: TooManyRequestsException
    },
    {
      shape: NotAuthorizedException
    },
    {
      shape: InternalErrorException
    }
  ]
};
