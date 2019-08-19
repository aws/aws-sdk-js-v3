import { InvalidInput } from "./InvalidInput";
import { ResourceLimitExceeded } from "./ResourceLimitExceeded";
import { NamespaceNotFound } from "./NamespaceNotFound";
import { ServiceAlreadyExists } from "./ServiceAlreadyExists";
export type CreateServiceExceptionsUnion =
  | InvalidInput
  | ResourceLimitExceeded
  | NamespaceNotFound
  | ServiceAlreadyExists;
