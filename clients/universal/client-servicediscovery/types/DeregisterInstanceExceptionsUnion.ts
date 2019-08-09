import { DuplicateRequest } from "./DuplicateRequest";
import { InvalidInput } from "./InvalidInput";
import { InstanceNotFound } from "./InstanceNotFound";
import { ResourceInUse } from "./ResourceInUse";
import { ServiceNotFound } from "./ServiceNotFound";
export type DeregisterInstanceExceptionsUnion =
  | DuplicateRequest
  | InvalidInput
  | InstanceNotFound
  | ResourceInUse
  | ServiceNotFound;
