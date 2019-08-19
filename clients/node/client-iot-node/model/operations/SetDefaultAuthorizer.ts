import { SetDefaultAuthorizerInput } from "../shapes/SetDefaultAuthorizerInput";
import { SetDefaultAuthorizerOutput } from "../shapes/SetDefaultAuthorizerOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { ResourceAlreadyExistsException } from "../shapes/ResourceAlreadyExistsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
