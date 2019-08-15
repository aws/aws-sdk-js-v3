import { DeleteApiKeyInput } from "../shapes/DeleteApiKeyInput";
import { DeleteApiKeyOutput } from "../shapes/DeleteApiKeyOutput";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { NotFoundException } from "../shapes/NotFoundException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteApiKey: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteApiKey",
  http: {
    method: "DELETE",
    requestUri: "/apikeys/{api_Key}"
  },
  input: {
    shape: DeleteApiKeyInput
  },
  output: {
    shape: DeleteApiKeyOutput
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
    }
  ]
};
