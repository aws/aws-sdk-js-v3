import { ClearDefaultAuthorizerInput } from "./ClearDefaultAuthorizerInput";
import { ClearDefaultAuthorizerOutput } from "./ClearDefaultAuthorizerOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidRequestException } from "./InvalidRequestException";
import { ThrottlingException } from "./ThrottlingException";
import { UnauthorizedException } from "./UnauthorizedException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { InternalFailureException } from "./InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
