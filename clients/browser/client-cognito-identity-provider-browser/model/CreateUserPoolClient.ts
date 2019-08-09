import { CreateUserPoolClientInput } from "./CreateUserPoolClientInput";
import { CreateUserPoolClientOutput } from "./CreateUserPoolClientOutput";
import { InvalidParameterException } from "./InvalidParameterException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { LimitExceededException } from "./LimitExceededException";
import { NotAuthorizedException } from "./NotAuthorizedException";
import { ScopeDoesNotExistException } from "./ScopeDoesNotExistException";
import { InvalidOAuthFlowException } from "./InvalidOAuthFlowException";
import { InternalErrorException } from "./InternalErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CreateUserPoolClient: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateUserPoolClient",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateUserPoolClientInput
  },
  output: {
    shape: CreateUserPoolClientOutput
  },
  errors: [
    {
      shape: InvalidParameterException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: TooManyRequestsException
    },
    {
      shape: LimitExceededException
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
