import { NoSuchEntityException } from "./NoSuchEntityException";
import { LimitExceededException } from "./LimitExceededException";
import { ServiceFailureException } from "./ServiceFailureException";
export type DeleteAccountPasswordPolicyExceptionsUnion =
  | NoSuchEntityException
  | LimitExceededException
  | ServiceFailureException;
