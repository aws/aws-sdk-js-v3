import { GetApiKeysInput } from "../shapes/GetApiKeysInput";
import { GetApiKeysOutput } from "../shapes/GetApiKeysOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
