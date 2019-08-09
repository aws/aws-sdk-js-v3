import { DeleteApiKeyInput } from "./DeleteApiKeyInput";
import { DeleteApiKeyOutput } from "./DeleteApiKeyOutput";
import { UnauthorizedException } from "./UnauthorizedException";
import { NotFoundException } from "./NotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
