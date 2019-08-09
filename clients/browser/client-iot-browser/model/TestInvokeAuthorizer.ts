import { TestInvokeAuthorizerInput } from "./TestInvokeAuthorizerInput";
import { TestInvokeAuthorizerOutput } from "./TestInvokeAuthorizerOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidRequestException } from "./InvalidRequestException";
import { ThrottlingException } from "./ThrottlingException";
import { UnauthorizedException } from "./UnauthorizedException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { InternalFailureException } from "./InternalFailureException";
import { InvalidResponseException } from "./InvalidResponseException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const TestInvokeAuthorizer: _Operation_ = {
  metadata: ServiceMetadata,
  name: "TestInvokeAuthorizer",
  http: {
    method: "POST",
    requestUri: "/authorizer/{authorizerName}/test"
  },
  input: {
    shape: TestInvokeAuthorizerInput
  },
  output: {
    shape: TestInvokeAuthorizerOutput
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
      shape: InvalidResponseException
    }
  ]
};
