import { LimitExceededException } from "./LimitExceededException";
import { NoSuchEntityException } from "./NoSuchEntityException";
import { DeleteConflictException } from "./DeleteConflictException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
import { ServiceFailureException } from "./ServiceFailureException";
export type DeleteUserExceptionsUnion =
  | LimitExceededException
  | NoSuchEntityException
  | DeleteConflictException
  | ConcurrentModificationException
  | ServiceFailureException;
