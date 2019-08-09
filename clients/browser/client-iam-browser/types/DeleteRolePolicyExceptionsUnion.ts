import { NoSuchEntityException } from "./NoSuchEntityException";
import { LimitExceededException } from "./LimitExceededException";
import { UnmodifiableEntityException } from "./UnmodifiableEntityException";
import { ServiceFailureException } from "./ServiceFailureException";
export type DeleteRolePolicyExceptionsUnion =
  | NoSuchEntityException
  | LimitExceededException
  | UnmodifiableEntityException
  | ServiceFailureException;
