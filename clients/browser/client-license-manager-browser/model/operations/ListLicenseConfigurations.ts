import { ListLicenseConfigurationsInput } from "../shapes/ListLicenseConfigurationsInput";
import { ListLicenseConfigurationsOutput } from "../shapes/ListLicenseConfigurationsOutput";
import { InvalidParameterValueException } from "../shapes/InvalidParameterValueException";
import { ServerInternalException } from "../shapes/ServerInternalException";
import { FilterLimitExceededException } from "../shapes/FilterLimitExceededException";
import { AuthorizationException } from "../shapes/AuthorizationException";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { RateLimitExceededException } from "../shapes/RateLimitExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListLicenseConfigurations: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListLicenseConfigurations",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListLicenseConfigurationsInput
  },
  output: {
    shape: ListLicenseConfigurationsOutput
  },
  errors: [
    {
      shape: InvalidParameterValueException
    },
    {
      shape: ServerInternalException
    },
    {
      shape: FilterLimitExceededException
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
