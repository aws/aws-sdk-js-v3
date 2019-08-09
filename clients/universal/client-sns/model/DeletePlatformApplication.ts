import { DeletePlatformApplicationInput } from "./DeletePlatformApplicationInput";
import { DeletePlatformApplicationOutput } from "./DeletePlatformApplicationOutput";
import { InvalidParameterException } from "./InvalidParameterException";
import { InternalErrorException } from "./InternalErrorException";
import { AuthorizationErrorException } from "./AuthorizationErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeletePlatformApplication: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeletePlatformApplication",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeletePlatformApplicationInput
  },
  output: {
    shape: DeletePlatformApplicationOutput
  },
  errors: [
    {
      shape: InvalidParameterException
    },
    {
      shape: InternalErrorException
    },
    {
      shape: AuthorizationErrorException
    }
  ]
};
