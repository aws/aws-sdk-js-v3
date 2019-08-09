import { AccessDenied } from "./AccessDenied";
import { MissingBody } from "./MissingBody";
import { InvalidArgument } from "./InvalidArgument";
import { NoSuchDistribution } from "./NoSuchDistribution";
import { BatchTooLarge } from "./BatchTooLarge";
import { TooManyInvalidationsInProgress } from "./TooManyInvalidationsInProgress";
import { InconsistentQuantities } from "./InconsistentQuantities";
export type CreateInvalidationExceptionsUnion =
  | AccessDenied
  | MissingBody
  | InvalidArgument
  | NoSuchDistribution
  | BatchTooLarge
  | TooManyInvalidationsInProgress
  | InconsistentQuantities;
