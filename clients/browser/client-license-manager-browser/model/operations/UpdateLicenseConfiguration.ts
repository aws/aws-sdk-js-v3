import { UpdateLicenseConfigurationInput } from "../shapes/UpdateLicenseConfigurationInput";
import { UpdateLicenseConfigurationOutput } from "../shapes/UpdateLicenseConfigurationOutput";
import { InvalidParameterValueException } from "../shapes/InvalidParameterValueException";
import { ServerInternalException } from "../shapes/ServerInternalException";
import { AuthorizationException } from "../shapes/AuthorizationException";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { RateLimitExceededException } from "../shapes/RateLimitExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateLicenseConfiguration: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateLicenseConfiguration",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateLicenseConfigurationInput
  },
  output: {
    shape: UpdateLicenseConfigurationOutput
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
