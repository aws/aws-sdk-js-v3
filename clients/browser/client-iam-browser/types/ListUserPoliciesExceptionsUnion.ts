import { NoSuchEntityException } from "./NoSuchEntityException";
import { ServiceFailureException } from "./ServiceFailureException";
export type ListUserPoliciesExceptionsUnion =
  | NoSuchEntityException
  | ServiceFailureException;
