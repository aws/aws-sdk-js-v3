import { NoSuchOrganizationConfigRuleException } from "./NoSuchOrganizationConfigRuleException";
import { ResourceInUseException } from "./ResourceInUseException";
import { OrganizationAccessDeniedException } from "./OrganizationAccessDeniedException";
export type DeleteOrganizationConfigRuleExceptionsUnion =
  | NoSuchOrganizationConfigRuleException
  | ResourceInUseException
  | OrganizationAccessDeniedException;
