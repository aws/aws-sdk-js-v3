import { DeleteLicenseConfigurationInput } from "./DeleteLicenseConfigurationInput";
import { DeleteLicenseConfigurationOutput } from "./DeleteLicenseConfigurationOutput";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { ServerInternalException } from "./ServerInternalException";
import { AuthorizationException } from "./AuthorizationException";
import { AccessDeniedException } from "./AccessDeniedException";
import { RateLimitExceededException } from "./RateLimitExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeleteLicenseConfiguration: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteLicenseConfiguration",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteLicenseConfigurationInput
  },
  output: {
    shape: DeleteLicenseConfigurationOutput
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
