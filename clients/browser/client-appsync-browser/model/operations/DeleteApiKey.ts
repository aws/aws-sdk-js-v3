import { DeleteApiKeyInput } from "../shapes/DeleteApiKeyInput";
import { DeleteApiKeyOutput } from "../shapes/DeleteApiKeyOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { NotFoundException } from "../shapes/NotFoundException";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteApiKey: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteApiKey",
  http: {
    method: "DELETE",
    requestUri: "/v1/apis/{apiId}/apikeys/{id}"
  },
  input: {
    shape: DeleteApiKeyInput
  },
  output: {
    shape: DeleteApiKeyOutput
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
      shape: InternalFailureException
    }
  ]
};
