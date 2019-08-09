import { NoSuchEntityException } from "./NoSuchEntityException";
import { LimitExceededException } from "./LimitExceededException";
import { InvalidInputException } from "./InvalidInputException";
import { UnmodifiableEntityException } from "./UnmodifiableEntityException";
import { ServiceFailureException } from "./ServiceFailureException";
export type DetachRolePolicyExceptionsUnion =
  | NoSuchEntityException
  | LimitExceededException
  | InvalidInputException
  | UnmodifiableEntityException
  | ServiceFailureException;
