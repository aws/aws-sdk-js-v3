import { GetSdkTypesInput } from "../shapes/GetSdkTypesInput";
import { GetSdkTypesOutput } from "../shapes/GetSdkTypesOutput";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetSdkTypes: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetSdkTypes",
  http: {
    method: "GET",
    requestUri: "/sdktypes"
  },
  input: {
    shape: GetSdkTypesInput
  },
  output: {
    shape: GetSdkTypesOutput
  },
  errors: [
    {
      shape: UnauthorizedException
    },
    {
      shape: TooManyRequestsException
    }
  ]
};
