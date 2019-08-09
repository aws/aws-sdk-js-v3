import { GetApiKeyInput } from "./GetApiKeyInput";
import { GetApiKeyOutput } from "./GetApiKeyOutput";
import { UnauthorizedException } from "./UnauthorizedException";
import { NotFoundException } from "./NotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
