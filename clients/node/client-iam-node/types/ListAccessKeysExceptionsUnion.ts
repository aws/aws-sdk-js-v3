import { NoSuchEntityException } from "./NoSuchEntityException";
import { ServiceFailureException } from "./ServiceFailureException";
export type ListAccessKeysExceptionsUnion =
  | NoSuchEntityException
  | ServiceFailureException;
