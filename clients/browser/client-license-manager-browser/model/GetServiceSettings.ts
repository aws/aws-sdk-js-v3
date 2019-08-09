import { GetServiceSettingsInput } from "./GetServiceSettingsInput";
import { GetServiceSettingsOutput } from "./GetServiceSettingsOutput";
import { ServerInternalException } from "./ServerInternalException";
import { AuthorizationException } from "./AuthorizationException";
import { AccessDeniedException } from "./AccessDeniedException";
import { RateLimitExceededException } from "./RateLimitExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetServiceSettings: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetServiceSettings",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetServiceSettingsInput
  },
  output: {
    shape: GetServiceSettingsOutput
  },
  errors: [
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
