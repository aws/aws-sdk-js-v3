import { PutOrganizationConfigRuleInput } from "./PutOrganizationConfigRuleInput";
import { PutOrganizationConfigRuleOutput } from "./PutOrganizationConfigRuleOutput";
import { MaxNumberOfOrganizationConfigRulesExceededException } from "./MaxNumberOfOrganizationConfigRulesExceededException";
import { ResourceInUseException } from "./ResourceInUseException";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { ValidationException } from "./ValidationException";
import { OrganizationAccessDeniedException } from "./OrganizationAccessDeniedException";
import { NoAvailableOrganizationException } from "./NoAvailableOrganizationException";
import { OrganizationAllFeaturesNotEnabledException } from "./OrganizationAllFeaturesNotEnabledException";
import { InsufficientPermissionsException } from "./InsufficientPermissionsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
