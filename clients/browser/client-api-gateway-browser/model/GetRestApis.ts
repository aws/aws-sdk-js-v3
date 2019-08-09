import { GetRestApisInput } from "./GetRestApisInput";
import { GetRestApisOutput } from "./GetRestApisOutput";
import { BadRequestException } from "./BadRequestException";
import { UnauthorizedException } from "./UnauthorizedException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
