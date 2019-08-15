import { DeletePlatformApplicationInput } from "../shapes/DeletePlatformApplicationInput";
import { DeletePlatformApplicationOutput } from "../shapes/DeletePlatformApplicationOutput";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { InternalErrorException } from "../shapes/InternalErrorException";
import { AuthorizationErrorException } from "../shapes/AuthorizationErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
