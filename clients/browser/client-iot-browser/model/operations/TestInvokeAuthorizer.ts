import { TestInvokeAuthorizerInput } from "../shapes/TestInvokeAuthorizerInput";
import { TestInvokeAuthorizerOutput } from "../shapes/TestInvokeAuthorizerOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { InvalidResponseException } from "../shapes/InvalidResponseException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
