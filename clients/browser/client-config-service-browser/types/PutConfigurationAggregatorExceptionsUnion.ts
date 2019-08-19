import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { LimitExceededException } from "./LimitExceededException";
import { InvalidRoleException } from "./InvalidRoleException";
import { OrganizationAccessDeniedException } from "./OrganizationAccessDeniedException";
import { NoAvailableOrganizationException } from "./NoAvailableOrganizationException";
import { OrganizationAllFeaturesNotEnabledException } from "./OrganizationAllFeaturesNotEnabledException";
export type PutConfigurationAggregatorExceptionsUnion =
  | InvalidParameterValueException
  | LimitExceededException
  | InvalidRoleException
  | OrganizationAccessDeniedException
  | NoAvailableOrganizationException
  | OrganizationAllFeaturesNotEnabledException;
