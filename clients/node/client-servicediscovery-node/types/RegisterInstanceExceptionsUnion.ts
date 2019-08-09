import { DuplicateRequest } from "./DuplicateRequest";
import { InvalidInput } from "./InvalidInput";
import { ResourceInUse } from "./ResourceInUse";
import { ResourceLimitExceeded } from "./ResourceLimitExceeded";
import { ServiceNotFound } from "./ServiceNotFound";
export type RegisterInstanceExceptionsUnion =
  | DuplicateRequest
  | InvalidInput
  | ResourceInUse
  | ResourceLimitExceeded
  | ServiceNotFound;
