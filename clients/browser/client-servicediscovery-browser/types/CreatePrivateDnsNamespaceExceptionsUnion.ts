import { InvalidInput } from "./InvalidInput";
import { NamespaceAlreadyExists } from "./NamespaceAlreadyExists";
import { ResourceLimitExceeded } from "./ResourceLimitExceeded";
import { DuplicateRequest } from "./DuplicateRequest";
export type CreatePrivateDnsNamespaceExceptionsUnion =
  | InvalidInput
  | NamespaceAlreadyExists
  | ResourceLimitExceeded
  | DuplicateRequest;
