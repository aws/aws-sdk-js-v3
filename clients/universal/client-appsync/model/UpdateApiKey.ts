import { UpdateApiKeyInput } from "./UpdateApiKeyInput";
import { UpdateApiKeyOutput } from "./UpdateApiKeyOutput";
import { BadRequestException } from "./BadRequestException";
import { NotFoundException } from "./NotFoundException";
import { UnauthorizedException } from "./UnauthorizedException";
import { LimitExceededException } from "./LimitExceededException";
import { InternalFailureException } from "./InternalFailureException";
import { ApiKeyValidityOutOfBoundsException } from "./ApiKeyValidityOutOfBoundsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const UpdateApiKey: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateApiKey",
  http: {
    method: "POST",
    requestUri: "/v1/apis/{apiId}/apikeys/{id}"
  },
  input: {
    shape: UpdateApiKeyInput
  },
  output: {
    shape: UpdateApiKeyOutput
  },
  errors: [
    {
      shape: BadRequestException
    },
    {
      shape: NotFoundException
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
      shape: ApiKeyValidityOutOfBoundsException
    }
  ]
};
