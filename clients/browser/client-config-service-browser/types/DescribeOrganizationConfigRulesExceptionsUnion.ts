import { NoSuchOrganizationConfigRuleException } from "./NoSuchOrganizationConfigRuleException";
import { InvalidNextTokenException } from "./InvalidNextTokenException";
import { InvalidLimitException } from "./InvalidLimitException";
import { OrganizationAccessDeniedException } from "./OrganizationAccessDeniedException";
export type DescribeOrganizationConfigRulesExceptionsUnion =
  | NoSuchOrganizationConfigRuleException
  | InvalidNextTokenException
  | InvalidLimitException
  | OrganizationAccessDeniedException;
