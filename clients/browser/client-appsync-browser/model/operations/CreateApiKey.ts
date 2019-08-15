import { CreateApiKeyInput } from "../shapes/CreateApiKeyInput";
import { CreateApiKeyOutput } from "../shapes/CreateApiKeyOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { NotFoundException } from "../shapes/NotFoundException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { ApiKeyLimitExceededException } from "../shapes/ApiKeyLimitExceededException";
import { ApiKeyValidityOutOfBoundsException } from "../shapes/ApiKeyValidityOutOfBoundsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateApiKey: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateApiKey",
  http: {
    method: "POST",
    requestUri: "/v1/apis/{apiId}/apikeys"
  },
  input: {
    shape: CreateApiKeyInput
  },
  output: {
    shape: CreateApiKeyOutput
  },
  errors: [
    {
      shape: BadRequestException
    },
    {
      shape: NotFoundException
    },
    {
      shape: LimitExceededException
    },
    {
      shape: UnauthorizedException
    },
    {
      shape: LimitExceededException
    },
    {
      shape: InternalFailureException
    },
    {
      shape: ApiKeyLimitExceededException
    },
    {
      shape: ApiKeyValidityOutOfBoundsException
    }
  ]
};
