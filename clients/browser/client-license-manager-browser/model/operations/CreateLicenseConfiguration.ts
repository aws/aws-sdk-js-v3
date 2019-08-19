import { CreateLicenseConfigurationInput } from "../shapes/CreateLicenseConfigurationInput";
import { CreateLicenseConfigurationOutput } from "../shapes/CreateLicenseConfigurationOutput";
import { InvalidParameterValueException } from "../shapes/InvalidParameterValueException";
import { ServerInternalException } from "../shapes/ServerInternalException";
import { ResourceLimitExceededException } from "../shapes/ResourceLimitExceededException";
import { AuthorizationException } from "../shapes/AuthorizationException";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { RateLimitExceededException } from "../shapes/RateLimitExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
