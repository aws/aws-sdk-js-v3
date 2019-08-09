import { UpdateAuthorizerInput } from "./UpdateAuthorizerInput";
import { UpdateAuthorizerOutput } from "./UpdateAuthorizerOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidRequestException } from "./InvalidRequestException";
import { LimitExceededException } from "./LimitExceededException";
import { ThrottlingException } from "./ThrottlingException";
import { UnauthorizedException } from "./UnauthorizedException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { InternalFailureException } from "./InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
