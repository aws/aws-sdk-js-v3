import { GetFunctionInput } from "./GetFunctionInput";
import { GetFunctionOutput } from "./GetFunctionOutput";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
import { NotFoundException } from "./NotFoundException";
import { UnauthorizedException } from "./UnauthorizedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetFunction: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetFunction",
  http: {
    method: "GET",
    requestUri: "/v1/apis/{apiId}/functions/{functionId}"
  },
  input: {
    shape: GetFunctionInput
  },
  output: {
    shape: GetFunctionOutput
  },
  errors: [
    {
      shape: ConcurrentModificationException
    },
    {
      shape: NotFoundException
    },
    {
      shape: UnauthorizedException
    }
  ]
};
