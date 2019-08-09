import { InstanceNotFound } from "./InstanceNotFound";
import { InvalidInput } from "./InvalidInput";
import { ServiceNotFound } from "./ServiceNotFound";
export type GetInstanceExceptionsUnion =
  | InstanceNotFound
  | InvalidInput
  | ServiceNotFound;
