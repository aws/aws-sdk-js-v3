import { CreateAuthorizerInput } from "../shapes/CreateAuthorizerInput";
import { CreateAuthorizerOutput } from "../shapes/CreateAuthorizerOutput";
import { ResourceAlreadyExistsException } from "../shapes/ResourceAlreadyExistsException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
