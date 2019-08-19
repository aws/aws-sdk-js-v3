import { InvalidInput } from "./InvalidInput";
import { OperationLimitExceeded } from "./OperationLimitExceeded";
import { UnsupportedTLD } from "./UnsupportedTLD";
export type ListTagsForDomainExceptionsUnion =
  | InvalidInput
  | OperationLimitExceeded
  | UnsupportedTLD;
