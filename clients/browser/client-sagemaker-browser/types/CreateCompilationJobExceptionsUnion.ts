import { ResourceInUse } from "./ResourceInUse";
import { ResourceLimitExceeded } from "./ResourceLimitExceeded";
export type CreateCompilationJobExceptionsUnion =
  | ResourceInUse
  | ResourceLimitExceeded;
