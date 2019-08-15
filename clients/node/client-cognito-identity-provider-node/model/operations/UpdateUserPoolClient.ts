import { UpdateUserPoolClientInput } from "../shapes/UpdateUserPoolClientInput";
import { UpdateUserPoolClientOutput } from "../shapes/UpdateUserPoolClientOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { ConcurrentModificationException } from "../shapes/ConcurrentModificationException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { NotAuthorizedException } from "../shapes/NotAuthorizedException";
import { ScopeDoesNotExistException } from "../shapes/ScopeDoesNotExistException";
import { InvalidOAuthFlowException } from "../shapes/InvalidOAuthFlowException";
import { InternalErrorException } from "../shapes/InternalErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateUserPoolClient: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateUserPoolClient",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateUserPoolClientInput
  },
  output: {
    shape: UpdateUserPoolClientOutput
  },
  errors: [
    {
      shape: ResourceNotFoundException
    },
    {
      shape: InvalidParameterException
    },
    {
      shape: ConcurrentModificationException
    },
    {
      shape: TooManyRequestsException
    },
    {
      shape: NotAuthorizedException
    },
    {
      shape: ScopeDoesNotExistException
    },
    {
      shape: InvalidOAuthFlowException
    },
    {
      shape: InternalErrorException
    }
  ]
};
