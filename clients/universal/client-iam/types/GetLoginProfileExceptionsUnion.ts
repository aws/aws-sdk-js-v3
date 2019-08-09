import { NoSuchEntityException } from "./NoSuchEntityException";
import { ServiceFailureException } from "./ServiceFailureException";
export type GetLoginProfileExceptionsUnion =
  | NoSuchEntityException
  | ServiceFailureException;
