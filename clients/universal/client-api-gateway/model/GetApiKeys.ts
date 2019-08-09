import { GetApiKeysInput } from "./GetApiKeysInput";
import { GetApiKeysOutput } from "./GetApiKeysOutput";
import { BadRequestException } from "./BadRequestException";
import { UnauthorizedException } from "./UnauthorizedException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetApiKeys: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetApiKeys",
  http: {
    method: "GET",
    requestUri: "/apikeys"
  },
  input: {
    shape: GetApiKeysInput
  },
  output: {
    shape: GetApiKeysOutput
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
