import { InvalidInput } from "./InvalidInput";
import { NamespaceAlreadyExists } from "./NamespaceAlreadyExists";
import { ResourceLimitExceeded } from "./ResourceLimitExceeded";
import { DuplicateRequest } from "./DuplicateRequest";
export type CreateHttpNamespaceExceptionsUnion =
  | InvalidInput
  | NamespaceAlreadyExists
  | ResourceLimitExceeded
  | DuplicateRequest;
