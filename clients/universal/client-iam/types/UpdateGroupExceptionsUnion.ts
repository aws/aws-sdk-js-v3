import { NoSuchEntityException } from "./NoSuchEntityException";
import { EntityAlreadyExistsException } from "./EntityAlreadyExistsException";
import { LimitExceededException } from "./LimitExceededException";
import { ServiceFailureException } from "./ServiceFailureException";
export type UpdateGroupExceptionsUnion =
  | NoSuchEntityException
  | EntityAlreadyExistsException
  | LimitExceededException
  | ServiceFailureException;
