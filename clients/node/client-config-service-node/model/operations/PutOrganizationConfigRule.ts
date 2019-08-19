import { PutOrganizationConfigRuleInput } from "../shapes/PutOrganizationConfigRuleInput";
import { PutOrganizationConfigRuleOutput } from "../shapes/PutOrganizationConfigRuleOutput";
import { MaxNumberOfOrganizationConfigRulesExceededException } from "../shapes/MaxNumberOfOrganizationConfigRulesExceededException";
import { ResourceInUseException } from "../shapes/ResourceInUseException";
import { InvalidParameterValueException } from "../shapes/InvalidParameterValueException";
import { ValidationException } from "../shapes/ValidationException";
import { OrganizationAccessDeniedException } from "../shapes/OrganizationAccessDeniedException";
import { NoAvailableOrganizationException } from "../shapes/NoAvailableOrganizationException";
import { OrganizationAllFeaturesNotEnabledException } from "../shapes/OrganizationAllFeaturesNotEnabledException";
import { InsufficientPermissionsException } from "../shapes/InsufficientPermissionsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const PutOrganizationConfigRule: _Operation_ = {
  metadata: ServiceMetadata,
  name: "PutOrganizationConfigRule",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: PutOrganizationConfigRuleInput
  },
  output: {
    shape: PutOrganizationConfigRuleOutput
  },
  errors: [
    {
      shape: MaxNumberOfOrganizationConfigRulesExceededException
    },
    {
      shape: ResourceInUseException
    },
    {
      shape: InvalidParameterValueException
    },
    {
      shape: ValidationException
    },
    {
      shape: OrganizationAccessDeniedException
    },
    {
      shape: NoAvailableOrganizationException
    },
    {
      shape: OrganizationAllFeaturesNotEnabledException
    },
    {
      shape: InsufficientPermissionsException
    }
  ]
};
