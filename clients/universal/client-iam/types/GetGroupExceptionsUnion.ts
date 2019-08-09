import { NoSuchEntityException } from "./NoSuchEntityException";
import { ServiceFailureException } from "./ServiceFailureException";
export type GetGroupExceptionsUnion =
  | NoSuchEntityException
  | ServiceFailureException;
