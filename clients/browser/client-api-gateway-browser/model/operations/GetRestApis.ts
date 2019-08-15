import { GetRestApisInput } from "../shapes/GetRestApisInput";
import { GetRestApisOutput } from "../shapes/GetRestApisOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetRestApis: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetRestApis",
  http: {
    method: "GET",
    requestUri: "/restapis"
  },
  input: {
    shape: GetRestApisInput
  },
  output: {
    shape: GetRestApisOutput
  },
  errors: [
    {
      shape: BadRequestException
    },
    {
      shape: UnauthorizedException
    },
    {
      shape: TooManyRequestsException
    }
  ]
};
