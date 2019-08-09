import { TestInvokeAuthorizerInput } from "./TestInvokeAuthorizerInput";
import { TestInvokeAuthorizerOutput } from "./TestInvokeAuthorizerOutput";
import { BadRequestException } from "./BadRequestException";
import { UnauthorizedException } from "./UnauthorizedException";
import { NotFoundException } from "./NotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
