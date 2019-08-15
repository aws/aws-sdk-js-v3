import { ListAssociationsForLicenseConfigurationInput } from "../shapes/ListAssociationsForLicenseConfigurationInput";
import { ListAssociationsForLicenseConfigurationOutput } from "../shapes/ListAssociationsForLicenseConfigurationOutput";
import { InvalidParameterValueException } from "../shapes/InvalidParameterValueException";
import { FilterLimitExceededException } from "../shapes/FilterLimitExceededException";
import { ServerInternalException } from "../shapes/ServerInternalException";
import { AuthorizationException } from "../shapes/AuthorizationException";
import { AccessDeniedException } from "../shapes/AccessDeniedException";
import { RateLimitExceededException } from "../shapes/RateLimitExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
