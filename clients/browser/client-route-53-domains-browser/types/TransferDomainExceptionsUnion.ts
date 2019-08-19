import { InvalidInput } from "./InvalidInput";
import { UnsupportedTLD } from "./UnsupportedTLD";
import { DuplicateRequest } from "./DuplicateRequest";
import { TLDRulesViolation } from "./TLDRulesViolation";
import { DomainLimitExceeded } from "./DomainLimitExceeded";
import { OperationLimitExceeded } from "./OperationLimitExceeded";
export type TransferDomainExceptionsUnion =
  | InvalidInput
  | UnsupportedTLD
  | DuplicateRequest
  | TLDRulesViolation
  | DomainLimitExceeded
  | OperationLimitExceeded;
