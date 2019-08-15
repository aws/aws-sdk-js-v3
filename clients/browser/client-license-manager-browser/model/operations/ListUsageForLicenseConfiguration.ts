import { ListUsageForLicenseConfigurationInput } from "../shapes/ListUsageForLicenseConfigurationInput";
import { ListUsageForLicenseConfigurationOutput } from "../shapes/ListUsageForLicenseConfigurationOutput";
import { InvalidParameterValueException } from "../shapes/InvalidParameterValueException";
import { FilterLimitExceededException } from "../shapes/FilterLimitExceededException";
import { ServerInternalException } from "../shapes/ServerInternalException";
import { AuthorizationException } from "../shapes/AuthorizationException";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { RateLimitExceededException } from "../shapes/RateLimitExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
