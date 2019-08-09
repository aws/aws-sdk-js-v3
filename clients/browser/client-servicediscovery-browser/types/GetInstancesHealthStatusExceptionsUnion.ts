import { InstanceNotFound } from "./InstanceNotFound";
import { InvalidInput } from "./InvalidInput";
import { ServiceNotFound } from "./ServiceNotFound";
export type GetInstancesHealthStatusExceptionsUnion =
  | InstanceNotFound
  | InvalidInput
  | ServiceNotFound;
