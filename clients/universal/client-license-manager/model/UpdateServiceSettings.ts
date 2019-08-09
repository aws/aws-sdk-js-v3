import { UpdateServiceSettingsInput } from "./UpdateServiceSettingsInput";
import { UpdateServiceSettingsOutput } from "./UpdateServiceSettingsOutput";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { ServerInternalException } from "./ServerInternalException";
import { AuthorizationException } from "./AuthorizationException";
import { AccessDeniedException } from "./AccessDeniedException";
import { RateLimitExceededException } from "./RateLimitExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const UpdateServiceSettings: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateServiceSettings",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateServiceSettingsInput
  },
  output: {
    shape: UpdateServiceSettingsOutput
  },
  errors: [
    {
      shape: InvalidParameterValueException
    },
    {
      shape: ServerInternalException
    },
    {
      shape: AuthorizationException
    },
    {
      shape: AccessDeniedException
    },
    {
      shape: RateLimitExceededException
    }
  ]
};
