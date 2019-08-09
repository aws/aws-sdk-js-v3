import { NoSuchEntityException } from "./NoSuchEntityException";
import { DeleteConflictException } from "./DeleteConflictException";
import { LimitExceededException } from "./LimitExceededException";
import { ServiceFailureException } from "./ServiceFailureException";
export type DeleteInstanceProfileExceptionsUnion =
  | NoSuchEntityException
  | DeleteConflictException
  | LimitExceededException
  | ServiceFailureException;
