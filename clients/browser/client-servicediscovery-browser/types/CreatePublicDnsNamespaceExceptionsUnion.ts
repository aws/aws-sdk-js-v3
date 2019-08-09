import { InvalidInput } from "./InvalidInput";
import { NamespaceAlreadyExists } from "./NamespaceAlreadyExists";
import { ResourceLimitExceeded } from "./ResourceLimitExceeded";
import { DuplicateRequest } from "./DuplicateRequest";
export type CreatePublicDnsNamespaceExceptionsUnion =
  | InvalidInput
  | NamespaceAlreadyExists
  | ResourceLimitExceeded
  | DuplicateRequest;
