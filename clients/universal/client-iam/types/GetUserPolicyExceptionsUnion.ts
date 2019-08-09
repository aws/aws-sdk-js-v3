import { NoSuchEntityException } from "./NoSuchEntityException";
import { ServiceFailureException } from "./ServiceFailureException";
export type GetUserPolicyExceptionsUnion =
  | NoSuchEntityException
  | ServiceFailureException;
