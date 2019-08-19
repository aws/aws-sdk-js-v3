import { TestInvokeMethodInput } from "../shapes/TestInvokeMethodInput";
import { TestInvokeMethodOutput } from "../shapes/TestInvokeMethodOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { NotFoundException } from "../shapes/NotFoundException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const TestInvokeMethod: _Operation_ = {
  metadata: ServiceMetadata,
  name: "TestInvokeMethod",
  http: {
    method: "POST",
    requestUri:
      "/restapis/{restapi_id}/resources/{resource_id}/methods/{http_method}"
  },
  input: {
    shape: TestInvokeMethodInput
  },
  output: {
    shape: TestInvokeMethodOutput
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
