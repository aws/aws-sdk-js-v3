import { ServiceNotFound } from "./ServiceNotFound";
import { NamespaceNotFound } from "./NamespaceNotFound";
import { InvalidInput } from "./InvalidInput";
export type DiscoverInstancesExceptionsUnion =
  | ServiceNotFound
  | NamespaceNotFound
  | InvalidInput;
