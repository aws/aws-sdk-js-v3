import { ListAssociationsForLicenseConfigurationInput } from "./ListAssociationsForLicenseConfigurationInput";
import { ListAssociationsForLicenseConfigurationOutput } from "./ListAssociationsForLicenseConfigurationOutput";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { FilterLimitExceededException } from "./FilterLimitExceededException";
import { ServerInternalException } from "./ServerInternalException";
import { AuthorizationException } from "./AuthorizationException";
import { AccessDeniedException } from "./AccessDeniedException";
import { RateLimitExceededException } from "./RateLimitExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ListAssociationsForLicenseConfiguration: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListAssociationsForLicenseConfiguration",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListAssociationsForLicenseConfigurationInput
  },
  output: {
    shape: ListAssociationsForLicenseConfigurationOutput
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
