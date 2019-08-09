import { EntityTemporarilyUnmodifiableException } from "./EntityTemporarilyUnmodifiableException";
import { NoSuchEntityException } from "./NoSuchEntityException";
import { LimitExceededException } from "./LimitExceededException";
import { ServiceFailureException } from "./ServiceFailureException";
export type DeactivateMFADeviceExceptionsUnion =
  | EntityTemporarilyUnmodifiableException
  | NoSuchEntityException
  | LimitExceededException
  | ServiceFailureException;
