import { NoSuchEntityException } from "./NoSuchEntityException";
import { ServiceFailureException } from "./ServiceFailureException";
export type GetRoleExceptionsUnion =
  | NoSuchEntityException
  | ServiceFailureException;
