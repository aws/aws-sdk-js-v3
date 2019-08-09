import { NoSuchEntityException } from "./NoSuchEntityException";
import { LimitExceededException } from "./LimitExceededException";
import { EntityAlreadyExistsException } from "./EntityAlreadyExistsException";
import { EntityTemporarilyUnmodifiableException } from "./EntityTemporarilyUnmodifiableException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
import { ServiceFailureException } from "./ServiceFailureException";
export type UpdateUserExceptionsUnion =
  | NoSuchEntityException
  | LimitExceededException
  | EntityAlreadyExistsException
  | EntityTemporarilyUnmodifiableException
  | ConcurrentModificationException
  | ServiceFailureException;
