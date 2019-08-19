import { NoSuchEntityException } from "./NoSuchEntityException";
import { ServiceFailureException } from "./ServiceFailureException";
export type GetRolePolicyExceptionsUnion =
  | NoSuchEntityException
  | ServiceFailureException;
