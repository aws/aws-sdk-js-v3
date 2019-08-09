import { DeleteApiKeyInput } from "./DeleteApiKeyInput";
import { DeleteApiKeyOutput } from "./DeleteApiKeyOutput";
import { BadRequestException } from "./BadRequestException";
import { NotFoundException } from "./NotFoundException";
import { UnauthorizedException } from "./UnauthorizedException";
import { InternalFailureException } from "./InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
