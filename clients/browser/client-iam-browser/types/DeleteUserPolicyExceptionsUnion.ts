import { NoSuchEntityException } from "./NoSuchEntityException";
import { LimitExceededException } from "./LimitExceededException";
import { ServiceFailureException } from "./ServiceFailureException";
export type DeleteUserPolicyExceptionsUnion =
  | NoSuchEntityException
  | LimitExceededException
  | ServiceFailureException;
