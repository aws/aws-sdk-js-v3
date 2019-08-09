import { SetDefaultAuthorizerInput } from "./SetDefaultAuthorizerInput";
import { SetDefaultAuthorizerOutput } from "./SetDefaultAuthorizerOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidRequestException } from "./InvalidRequestException";
import { ThrottlingException } from "./ThrottlingException";
import { UnauthorizedException } from "./UnauthorizedException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { InternalFailureException } from "./InternalFailureException";
import { ResourceAlreadyExistsException } from "./ResourceAlreadyExistsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const SetDefaultAuthorizer: _Operation_ = {
  metadata: ServiceMetadata,
  name: "SetDefaultAuthorizer",
  http: {
    method: "POST",
    requestUri: "/default-authorizer"
  },
  input: {
    shape: SetDefaultAuthorizerInput
  },
  output: {
    shape: SetDefaultAuthorizerOutput
  },
  errors: [
    {
      shape: ResourceNotFoundException
    },
    {
      shape: InvalidRequestException
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
    },
    {
      shape: ResourceAlreadyExistsException
    }
  ]
};
