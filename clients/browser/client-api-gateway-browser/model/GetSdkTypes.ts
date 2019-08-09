import { GetSdkTypesInput } from "./GetSdkTypesInput";
import { GetSdkTypesOutput } from "./GetSdkTypesOutput";
import { UnauthorizedException } from "./UnauthorizedException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
