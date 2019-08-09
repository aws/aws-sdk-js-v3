import { InvalidInputException } from "./InvalidInputException";
import { LimitExceededException } from "./LimitExceededException";
import { NoSuchEntityException } from "./NoSuchEntityException";
import { ServiceFailureException } from "./ServiceFailureException";
export type CreateServiceLinkedRoleExceptionsUnion =
  | InvalidInputException
  | LimitExceededException
  | NoSuchEntityException
  | ServiceFailureException;
