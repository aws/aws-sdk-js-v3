import { TestInvokeMethodInput } from "./TestInvokeMethodInput";
import { TestInvokeMethodOutput } from "./TestInvokeMethodOutput";
import { BadRequestException } from "./BadRequestException";
import { UnauthorizedException } from "./UnauthorizedException";
import { NotFoundException } from "./NotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
