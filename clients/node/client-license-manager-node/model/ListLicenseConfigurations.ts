import { ListLicenseConfigurationsInput } from "./ListLicenseConfigurationsInput";
import { ListLicenseConfigurationsOutput } from "./ListLicenseConfigurationsOutput";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { ServerInternalException } from "./ServerInternalException";
import { FilterLimitExceededException } from "./FilterLimitExceededException";
import { AuthorizationException } from "./AuthorizationException";
import { AccessDeniedException } from "./AccessDeniedException";
import { RateLimitExceededException } from "./RateLimitExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
