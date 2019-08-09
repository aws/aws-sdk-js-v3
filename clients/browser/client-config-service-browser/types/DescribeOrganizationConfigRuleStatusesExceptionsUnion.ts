import { NoSuchOrganizationConfigRuleException } from "./NoSuchOrganizationConfigRuleException";
import { InvalidLimitException } from "./InvalidLimitException";
import { InvalidNextTokenException } from "./InvalidNextTokenException";
import { OrganizationAccessDeniedException } from "./OrganizationAccessDeniedException";
export type DescribeOrganizationConfigRuleStatusesExceptionsUnion =
  | NoSuchOrganizationConfigRuleException
  | InvalidLimitException
  | InvalidNextTokenException
  | OrganizationAccessDeniedException;
