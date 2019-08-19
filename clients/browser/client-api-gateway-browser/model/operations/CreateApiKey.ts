import { CreateApiKeyInput } from "../shapes/CreateApiKeyInput";
import { CreateApiKeyOutput } from "../shapes/CreateApiKeyOutput";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { NotFoundException } from "../shapes/NotFoundException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { BadRequestException } from "../shapes/BadRequestException";
import { ConflictException } from "../shapes/ConflictException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateApiKey: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateApiKey",
  http: {
    method: "POST",
    requestUri: "/apikeys"
  },
  input: {
    shape: CreateApiKeyInput
  },
  output: {
    shape: CreateApiKeyOutput
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
    },
    {
      shape: LimitExceededException
    },
    {
      shape: BadRequestException
    },
    {
      shape: ConflictException
    }
  ]
};
