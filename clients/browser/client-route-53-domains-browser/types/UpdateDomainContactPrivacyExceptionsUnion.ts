import { InvalidInput } from "./InvalidInput";
import { DuplicateRequest } from "./DuplicateRequest";
import { TLDRulesViolation } from "./TLDRulesViolation";
import { OperationLimitExceeded } from "./OperationLimitExceeded";
import { UnsupportedTLD } from "./UnsupportedTLD";
export type UpdateDomainContactPrivacyExceptionsUnion =
  | InvalidInput
  | DuplicateRequest
  | TLDRulesViolation
  | OperationLimitExceeded
  | UnsupportedTLD;
