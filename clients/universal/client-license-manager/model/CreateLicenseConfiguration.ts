import { CreateLicenseConfigurationInput } from "./CreateLicenseConfigurationInput";
import { CreateLicenseConfigurationOutput } from "./CreateLicenseConfigurationOutput";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { ServerInternalException } from "./ServerInternalException";
import { ResourceLimitExceededException } from "./ResourceLimitExceededException";
import { AuthorizationException } from "./AuthorizationException";
import { AccessDeniedException } from "./AccessDeniedException";
import { RateLimitExceededException } from "./RateLimitExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CreateLicenseConfiguration: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateLicenseConfiguration",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateLicenseConfigurationInput
  },
  output: {
    shape: CreateLicenseConfigurationOutput
  },
  errors: [
    {
      shape: InvalidParameterValueException
    },
    {
      shape: ServerInternalException
    },
    {
      shape: ResourceLimitExceededException
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
