import { NoSuchInvalidation } from "./NoSuchInvalidation";
import { NoSuchDistribution } from "./NoSuchDistribution";
import { AccessDenied } from "./AccessDenied";
export type GetInvalidationExceptionsUnion =
  | NoSuchInvalidation
  | NoSuchDistribution
  | AccessDenied;
