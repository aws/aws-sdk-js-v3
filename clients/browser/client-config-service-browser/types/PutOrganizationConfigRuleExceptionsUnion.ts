import { MaxNumberOfOrganizationConfigRulesExceededException } from "./MaxNumberOfOrganizationConfigRulesExceededException";
import { ResourceInUseException } from "./ResourceInUseException";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { ValidationException } from "./ValidationException";
import { OrganizationAccessDeniedException } from "./OrganizationAccessDeniedException";
import { NoAvailableOrganizationException } from "./NoAvailableOrganizationException";
import { OrganizationAllFeaturesNotEnabledException } from "./OrganizationAllFeaturesNotEnabledException";
import { InsufficientPermissionsException } from "./InsufficientPermissionsException";
export type PutOrganizationConfigRuleExceptionsUnion =
  | MaxNumberOfOrganizationConfigRulesExceededException
  | ResourceInUseException
  | InvalidParameterValueException
  | ValidationException
  | OrganizationAccessDeniedException
  | NoAvailableOrganizationException
  | OrganizationAllFeaturesNotEnabledException
  | InsufficientPermissionsException;
