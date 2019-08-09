import { ListUsageForLicenseConfigurationInput } from "./ListUsageForLicenseConfigurationInput";
import { ListUsageForLicenseConfigurationOutput } from "./ListUsageForLicenseConfigurationOutput";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { FilterLimitExceededException } from "./FilterLimitExceededException";
import { ServerInternalException } from "./ServerInternalException";
import { AuthorizationException } from "./AuthorizationException";
import { AccessDeniedException } from "./AccessDeniedException";
import { RateLimitExceededException } from "./RateLimitExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ListUsageForLicenseConfiguration: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListUsageForLicenseConfiguration",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListUsageForLicenseConfigurationInput
  },
  output: {
    shape: ListUsageForLicenseConfigurationOutput
  },
  errors: [
    {
      shape: InvalidParameterValueException
    },
    {
      shape: FilterLimitExceededException
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
