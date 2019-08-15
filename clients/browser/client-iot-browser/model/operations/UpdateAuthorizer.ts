import { UpdateAuthorizerInput } from "../shapes/UpdateAuthorizerInput";
import { UpdateAuthorizerOutput } from "../shapes/UpdateAuthorizerOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateAuthorizer: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateAuthorizer",
  http: {
    method: "PUT",
    requestUri: "/authorizer/{authorizerName}"
  },
  input: {
    shape: UpdateAuthorizerInput
  },
  output: {
    shape: UpdateAuthorizerOutput
  },
  errors: [
    {
      shape: ResourceNotFoundException
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
