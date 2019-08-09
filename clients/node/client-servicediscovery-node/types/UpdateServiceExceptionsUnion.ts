import { DuplicateRequest } from "./DuplicateRequest";
import { InvalidInput } from "./InvalidInput";
import { ServiceNotFound } from "./ServiceNotFound";
export type UpdateServiceExceptionsUnion =
  | DuplicateRequest
  | InvalidInput
  | ServiceNotFound;
