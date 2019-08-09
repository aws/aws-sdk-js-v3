import { InvalidInput } from "./InvalidInput";
import { OperationLimitExceeded } from "./OperationLimitExceeded";
import { UnsupportedTLD } from "./UnsupportedTLD";
export type ResendContactReachabilityEmailExceptionsUnion =
  | InvalidInput
  | OperationLimitExceeded
  | UnsupportedTLD;
