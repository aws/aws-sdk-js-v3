import { ResourceInUse } from "./ResourceInUse";
import { ResourceLimitExceeded } from "./ResourceLimitExceeded";
export type CreateLabelingJobExceptionsUnion =
  | ResourceInUse
  | ResourceLimitExceeded;
