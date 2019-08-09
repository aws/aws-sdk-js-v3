import { InvalidInput } from "./InvalidInput";
import { UnsupportedTLD } from "./UnsupportedTLD";
import { TLDRulesViolation } from "./TLDRulesViolation";
export type EnableDomainAutoRenewExceptionsUnion =
  | InvalidInput
  | UnsupportedTLD
  | TLDRulesViolation;
