import { ClearDefaultAuthorizerInput } from "../shapes/ClearDefaultAuthorizerInput";
import { ClearDefaultAuthorizerOutput } from "../shapes/ClearDefaultAuthorizerOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ClearDefaultAuthorizer: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ClearDefaultAuthorizer",
  http: {
    method: "DELETE",
    requestUri: "/default-authorizer"
  },
  input: {
    shape: ClearDefaultAuthorizerInput
  },
  output: {
    shape: ClearDefaultAuthorizerOutput
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
    }
  ]
};
