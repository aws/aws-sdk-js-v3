import { GetSdkTypeInput } from "./GetSdkTypeInput";
import { GetSdkTypeOutput } from "./GetSdkTypeOutput";
import { UnauthorizedException } from "./UnauthorizedException";
import { NotFoundException } from "./NotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
