import { GetApiKeyInput } from "../shapes/GetApiKeyInput";
import { GetApiKeyOutput } from "../shapes/GetApiKeyOutput";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { NotFoundException } from "../shapes/NotFoundException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetApiKey: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetApiKey",
  http: {
    method: "GET",
    requestUri: "/apikeys/{api_Key}"
  },
  input: {
    shape: GetApiKeyInput
  },
  output: {
    shape: GetApiKeyOutput
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
