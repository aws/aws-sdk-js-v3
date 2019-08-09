import { NoSuchEntityException } from "./NoSuchEntityException";
import { ServiceFailureException } from "./ServiceFailureException";
export type ListInstanceProfilesForRoleExceptionsUnion =
  | NoSuchEntityException
  | ServiceFailureException;
