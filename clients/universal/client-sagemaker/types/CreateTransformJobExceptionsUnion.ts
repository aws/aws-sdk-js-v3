import { ResourceInUse } from "./ResourceInUse";
import { ResourceLimitExceeded } from "./ResourceLimitExceeded";
export type CreateTransformJobExceptionsUnion =
  | ResourceInUse
  | ResourceLimitExceeded;
