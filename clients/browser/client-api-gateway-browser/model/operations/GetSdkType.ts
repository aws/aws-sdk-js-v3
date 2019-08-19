import { GetSdkTypeInput } from "../shapes/GetSdkTypeInput";
import { GetSdkTypeOutput } from "../shapes/GetSdkTypeOutput";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { NotFoundException } from "../shapes/NotFoundException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetSdkType: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetSdkType",
  http: {
    method: "GET",
    requestUri: "/sdktypes/{sdktype_id}"
  },
  input: {
    shape: GetSdkTypeInput
  },
  output: {
    shape: GetSdkTypeOutput
  },
  errors: [
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
