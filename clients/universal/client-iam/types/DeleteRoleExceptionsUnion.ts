import { NoSuchEntityException } from "./NoSuchEntityException";
import { DeleteConflictException } from "./DeleteConflictException";
import { LimitExceededException } from "./LimitExceededException";
import { UnmodifiableEntityException } from "./UnmodifiableEntityException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
import { ServiceFailureException } from "./ServiceFailureException";
export type DeleteRoleExceptionsUnion =
  | NoSuchEntityException
  | DeleteConflictException
  | LimitExceededException
  | UnmodifiableEntityException
  | ConcurrentModificationException
  | ServiceFailureException;
