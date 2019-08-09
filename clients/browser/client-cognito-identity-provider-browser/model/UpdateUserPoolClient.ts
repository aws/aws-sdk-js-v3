import { UpdateUserPoolClientInput } from "./UpdateUserPoolClientInput";
import { UpdateUserPoolClientOutput } from "./UpdateUserPoolClientOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidParameterException } from "./InvalidParameterException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { NotAuthorizedException } from "./NotAuthorizedException";
import { ScopeDoesNotExistException } from "./ScopeDoesNotExistException";
import { InvalidOAuthFlowException } from "./InvalidOAuthFlowException";
import { InternalErrorException } from "./InternalErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
