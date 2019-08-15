import { GetServiceSettingsInput } from "../shapes/GetServiceSettingsInput";
import { GetServiceSettingsOutput } from "../shapes/GetServiceSettingsOutput";
import { ServerInternalException } from "../shapes/ServerInternalException";
import { AuthorizationException } from "../shapes/AuthorizationException";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { RateLimitExceededException } from "../shapes/RateLimitExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
