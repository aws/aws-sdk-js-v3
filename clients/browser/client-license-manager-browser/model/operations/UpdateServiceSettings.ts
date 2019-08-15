import { UpdateServiceSettingsInput } from "../shapes/UpdateServiceSettingsInput";
import { UpdateServiceSettingsOutput } from "../shapes/UpdateServiceSettingsOutput";
import { InvalidParameterValueException } from "../shapes/InvalidParameterValueException";
import { ServerInternalException } from "../shapes/ServerInternalException";
import { AuthorizationException } from "../shapes/AuthorizationException";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { RateLimitExceededException } from "../shapes/RateLimitExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
