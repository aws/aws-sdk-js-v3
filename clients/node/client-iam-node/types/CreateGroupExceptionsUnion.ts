import { LimitExceededException } from "./LimitExceededException";
import { EntityAlreadyExistsException } from "./EntityAlreadyExistsException";
import { NoSuchEntityException } from "./NoSuchEntityException";
import { ServiceFailureException } from "./ServiceFailureException";
export type CreateGroupExceptionsUnion =
  | LimitExceededException
  | EntityAlreadyExistsException
  | NoSuchEntityException
  | ServiceFailureException;
