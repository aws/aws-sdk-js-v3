import { InvalidInput } from "./InvalidInput";
import { UnsupportedTLD } from "./UnsupportedTLD";
export type CheckDomainAvailabilityExceptionsUnion =
  | InvalidInput
  | UnsupportedTLD;
