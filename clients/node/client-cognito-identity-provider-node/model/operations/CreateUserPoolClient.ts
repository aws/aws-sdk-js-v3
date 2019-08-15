import { CreateUserPoolClientInput } from "../shapes/CreateUserPoolClientInput";
import { CreateUserPoolClientOutput } from "../shapes/CreateUserPoolClientOutput";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { NotAuthorizedException } from "../shapes/NotAuthorizedException";
import { ScopeDoesNotExistException } from "../shapes/ScopeDoesNotExistException";
import { InvalidOAuthFlowException } from "../shapes/InvalidOAuthFlowException";
import { InternalErrorException } from "../shapes/InternalErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
