import { InvalidInput } from "./InvalidInput";
import { ServiceNotFound } from "./ServiceNotFound";
import { ResourceInUse } from "./ResourceInUse";
export type DeleteServiceExceptionsUnion =
  | InvalidInput
  | ServiceNotFound
  | ResourceInUse;
