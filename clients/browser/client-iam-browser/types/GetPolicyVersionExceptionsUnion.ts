import { NoSuchEntityException } from "./NoSuchEntityException";
import { InvalidInputException } from "./InvalidInputException";
import { ServiceFailureException } from "./ServiceFailureException";
export type GetPolicyVersionExceptionsUnion =
  | NoSuchEntityException
  | InvalidInputException
  | ServiceFailureException;
