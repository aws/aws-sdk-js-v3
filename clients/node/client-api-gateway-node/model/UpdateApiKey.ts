import { UpdateApiKeyInput } from "./UpdateApiKeyInput";
import { UpdateApiKeyOutput } from "./UpdateApiKeyOutput";
import { UnauthorizedException } from "./UnauthorizedException";
import { NotFoundException } from "./NotFoundException";
import { BadRequestException } from "./BadRequestException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { ConflictException } from "./ConflictException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
