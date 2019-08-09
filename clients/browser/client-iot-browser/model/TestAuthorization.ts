import { TestAuthorizationInput } from "./TestAuthorizationInput";
import { TestAuthorizationOutput } from "./TestAuthorizationOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidRequestException } from "./InvalidRequestException";
import { ThrottlingException } from "./ThrottlingException";
import { UnauthorizedException } from "./UnauthorizedException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { InternalFailureException } from "./InternalFailureException";
import { LimitExceededException } from "./LimitExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const TestAuthorization: _Operation_ = {
  metadata: ServiceMetadata,
  name: "TestAuthorization",
  http: {
    method: "POST",
    requestUri: "/test-authorization"
  },
  input: {
    shape: TestAuthorizationInput
  },
  output: {
    shape: TestAuthorizationOutput
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
      shape: LimitExceededException
    }
  ]
};
