import { NoSuchEntityException } from "./NoSuchEntityException";
import { LimitExceededException } from "./LimitExceededException";
import { InvalidInputException } from "./InvalidInputException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
import { ServiceFailureException } from "./ServiceFailureException";
export type TagRoleExceptionsUnion =
  | NoSuchEntityException
  | LimitExceededException
  | InvalidInputException
  | ConcurrentModificationException
  | ServiceFailureException;
