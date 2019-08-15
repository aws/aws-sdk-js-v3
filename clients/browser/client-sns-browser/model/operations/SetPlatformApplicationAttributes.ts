import { SetPlatformApplicationAttributesInput } from "../shapes/SetPlatformApplicationAttributesInput";
import { SetPlatformApplicationAttributesOutput } from "../shapes/SetPlatformApplicationAttributesOutput";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { InternalErrorException } from "../shapes/InternalErrorException";
import { AuthorizationErrorException } from "../shapes/AuthorizationErrorException";
import { NotFoundException } from "../shapes/NotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
