import { NoSuchEntityException } from "./NoSuchEntityException";
import { LimitExceededException } from "./LimitExceededException";
import { InvalidInputException } from "./InvalidInputException";
import { ServiceFailureException } from "./ServiceFailureException";
export type DetachUserPolicyExceptionsUnion =
  | NoSuchEntityException
  | LimitExceededException
  | InvalidInputException
  | ServiceFailureException;
