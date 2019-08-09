import { LimitExceededException } from "./LimitExceededException";
import { EntityAlreadyExistsException } from "./EntityAlreadyExistsException";
import { NoSuchEntityException } from "./NoSuchEntityException";
import { InvalidInputException } from "./InvalidInputException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
import { ServiceFailureException } from "./ServiceFailureException";
export type CreateUserExceptionsUnion =
  | LimitExceededException
  | EntityAlreadyExistsException
  | NoSuchEntityException
  | InvalidInputException
  | ConcurrentModificationException
  | ServiceFailureException;
