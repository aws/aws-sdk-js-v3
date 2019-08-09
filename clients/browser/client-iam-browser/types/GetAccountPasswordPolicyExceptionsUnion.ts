import { NoSuchEntityException } from "./NoSuchEntityException";
import { ServiceFailureException } from "./ServiceFailureException";
export type GetAccountPasswordPolicyExceptionsUnion =
  | NoSuchEntityException
  | ServiceFailureException;
