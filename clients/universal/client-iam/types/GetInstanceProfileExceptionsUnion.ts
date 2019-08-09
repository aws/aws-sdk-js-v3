import { NoSuchEntityException } from "./NoSuchEntityException";
import { ServiceFailureException } from "./ServiceFailureException";
export type GetInstanceProfileExceptionsUnion =
  | NoSuchEntityException
  | ServiceFailureException;
