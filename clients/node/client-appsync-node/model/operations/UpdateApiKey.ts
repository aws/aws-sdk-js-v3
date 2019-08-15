import { UpdateApiKeyInput } from "../shapes/UpdateApiKeyInput";
import { UpdateApiKeyOutput } from "../shapes/UpdateApiKeyOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { NotFoundException } from "../shapes/NotFoundException";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { ApiKeyValidityOutOfBoundsException } from "../shapes/ApiKeyValidityOutOfBoundsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
