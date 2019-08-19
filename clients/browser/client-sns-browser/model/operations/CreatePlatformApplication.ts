import { CreatePlatformApplicationInput } from "../shapes/CreatePlatformApplicationInput";
import { CreatePlatformApplicationOutput } from "../shapes/CreatePlatformApplicationOutput";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { InternalErrorException } from "../shapes/InternalErrorException";
import { AuthorizationErrorException } from "../shapes/AuthorizationErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreatePlatformApplication: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreatePlatformApplication",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreatePlatformApplicationInput
  },
  output: {
    shape: CreatePlatformApplicationOutput,
    resultWrapper: "CreatePlatformApplicationResult"
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
