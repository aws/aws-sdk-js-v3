import { DeleteUserPoolClientInput } from "./DeleteUserPoolClientInput";
import { DeleteUserPoolClientOutput } from "./DeleteUserPoolClientOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidParameterException } from "./InvalidParameterException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { NotAuthorizedException } from "./NotAuthorizedException";
import { InternalErrorException } from "./InternalErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
