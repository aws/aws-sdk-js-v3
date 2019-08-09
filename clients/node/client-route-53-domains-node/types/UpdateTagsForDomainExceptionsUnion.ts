import { InvalidInput } from "./InvalidInput";
import { OperationLimitExceeded } from "./OperationLimitExceeded";
import { UnsupportedTLD } from "./UnsupportedTLD";
export type UpdateTagsForDomainExceptionsUnion =
  | InvalidInput
  | OperationLimitExceeded
  | UnsupportedTLD;
