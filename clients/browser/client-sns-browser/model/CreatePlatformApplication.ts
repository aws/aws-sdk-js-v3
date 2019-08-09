import { CreatePlatformApplicationInput } from "./CreatePlatformApplicationInput";
import { CreatePlatformApplicationOutput } from "./CreatePlatformApplicationOutput";
import { InvalidParameterException } from "./InvalidParameterException";
import { InternalErrorException } from "./InternalErrorException";
import { AuthorizationErrorException } from "./AuthorizationErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
