import { InvalidInput } from "./InvalidInput";
import { UnsupportedTLD } from "./UnsupportedTLD";
import { DuplicateRequest } from "./DuplicateRequest";
import { TLDRulesViolation } from "./TLDRulesViolation";
import { OperationLimitExceeded } from "./OperationLimitExceeded";
export type RenewDomainExceptionsUnion =
  | InvalidInput
  | UnsupportedTLD
  | DuplicateRequest
  | TLDRulesViolation
  | OperationLimitExceeded;
