import { SetPlatformApplicationAttributesInput } from "./SetPlatformApplicationAttributesInput";
import { SetPlatformApplicationAttributesOutput } from "./SetPlatformApplicationAttributesOutput";
import { InvalidParameterException } from "./InvalidParameterException";
import { InternalErrorException } from "./InternalErrorException";
import { AuthorizationErrorException } from "./AuthorizationErrorException";
import { NotFoundException } from "./NotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const SetPlatformApplicationAttributes: _Operation_ = {
  metadata: ServiceMetadata,
  name: "SetPlatformApplicationAttributes",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: SetPlatformApplicationAttributesInput
  },
  output: {
    shape: SetPlatformApplicationAttributesOutput
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
    },
    {
      shape: NotFoundException
    }
  ]
};
