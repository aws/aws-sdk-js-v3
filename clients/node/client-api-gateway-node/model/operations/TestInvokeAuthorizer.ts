import { TestInvokeAuthorizerInput } from "../shapes/TestInvokeAuthorizerInput";
import { TestInvokeAuthorizerOutput } from "../shapes/TestInvokeAuthorizerOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { NotFoundException } from "../shapes/NotFoundException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const TestInvokeAuthorizer: _Operation_ = {
  metadata: ServiceMetadata,
  name: "TestInvokeAuthorizer",
  http: {
    method: "POST",
    requestUri: "/restapis/{restapi_id}/authorizers/{authorizer_id}"
  },
  input: {
    shape: TestInvokeAuthorizerInput
  },
  output: {
    shape: TestInvokeAuthorizerOutput
  },
  errors: [
    {
      shape: BadRequestException
    },
    {
      shape: UnauthorizedException
    },
    {
      shape: NotFoundException
    },
    {
      shape: TooManyRequestsException
    }
  ]
};
