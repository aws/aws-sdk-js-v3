import { InvalidInput } from "./InvalidInput";
import { NamespaceNotFound } from "./NamespaceNotFound";
import { ResourceInUse } from "./ResourceInUse";
import { DuplicateRequest } from "./DuplicateRequest";
export type DeleteNamespaceExceptionsUnion =
  | InvalidInput
  | NamespaceNotFound
  | ResourceInUse
  | DuplicateRequest;
