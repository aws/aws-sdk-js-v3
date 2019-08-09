import { CreateAuthorizerInput } from "./CreateAuthorizerInput";
import { CreateAuthorizerOutput } from "./CreateAuthorizerOutput";
import { ResourceAlreadyExistsException } from "./ResourceAlreadyExistsException";
import { InvalidRequestException } from "./InvalidRequestException";
import { LimitExceededException } from "./LimitExceededException";
import { ThrottlingException } from "./ThrottlingException";
import { UnauthorizedException } from "./UnauthorizedException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { InternalFailureException } from "./InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CreateAuthorizer: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateAuthorizer",
  http: {
    method: "POST",
    requestUri: "/authorizer/{authorizerName}"
  },
  input: {
    shape: CreateAuthorizerInput
  },
  output: {
    shape: CreateAuthorizerOutput
  },
  errors: [
    {
      shape: ResourceAlreadyExistsException
    },
    {
      shape: InvalidRequestException
    },
    {
      shape: LimitExceededException
    },
    {
      shape: ThrottlingException
    },
    {
      shape: UnauthorizedException
    },
    {
      shape: ServiceUnavailableException
    },
    {
      shape: InternalFailureException
    }
  ]
};
