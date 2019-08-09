import { CreateApiKeyInput } from "./CreateApiKeyInput";
import { CreateApiKeyOutput } from "./CreateApiKeyOutput";
import { BadRequestException } from "./BadRequestException";
import { NotFoundException } from "./NotFoundException";
import { LimitExceededException } from "./LimitExceededException";
import { UnauthorizedException } from "./UnauthorizedException";
import { InternalFailureException } from "./InternalFailureException";
import { ApiKeyLimitExceededException } from "./ApiKeyLimitExceededException";
import { ApiKeyValidityOutOfBoundsException } from "./ApiKeyValidityOutOfBoundsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
