import { UpdateApiKeyInput } from "../shapes/UpdateApiKeyInput";
import { UpdateApiKeyOutput } from "../shapes/UpdateApiKeyOutput";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { NotFoundException } from "../shapes/NotFoundException";
import { BadRequestException } from "../shapes/BadRequestException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { ConflictException } from "../shapes/ConflictException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateApiKey: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateApiKey",
  http: {
    method: "PATCH",
    requestUri: "/apikeys/{api_Key}"
  },
  input: {
    shape: UpdateApiKeyInput
  },
  output: {
    shape: UpdateApiKeyOutput
  },
  errors: [
    {
      shape: UnauthorizedException
    },
    {
      shape: NotFoundException
    },
    {
      shape: BadRequestException
    },
    {
      shape: TooManyRequestsException
    },
    {
      shape: ConflictException
    }
  ]
};
