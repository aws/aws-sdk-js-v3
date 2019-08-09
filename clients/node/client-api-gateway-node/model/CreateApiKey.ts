import { CreateApiKeyInput } from "./CreateApiKeyInput";
import { CreateApiKeyOutput } from "./CreateApiKeyOutput";
import { UnauthorizedException } from "./UnauthorizedException";
import { NotFoundException } from "./NotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { LimitExceededException } from "./LimitExceededException";
import { BadRequestException } from "./BadRequestException";
import { ConflictException } from "./ConflictException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
