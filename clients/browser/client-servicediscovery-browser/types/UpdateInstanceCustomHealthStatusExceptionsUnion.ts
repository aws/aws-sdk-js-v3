import { InstanceNotFound } from "./InstanceNotFound";
import { ServiceNotFound } from "./ServiceNotFound";
import { CustomHealthNotFound } from "./CustomHealthNotFound";
import { InvalidInput } from "./InvalidInput";
export type UpdateInstanceCustomHealthStatusExceptionsUnion =
  | InstanceNotFound
  | ServiceNotFound
  | CustomHealthNotFound
  | InvalidInput;
