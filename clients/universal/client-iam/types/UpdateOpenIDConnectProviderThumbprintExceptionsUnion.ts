import { InvalidInputException } from "./InvalidInputException";
import { NoSuchEntityException } from "./NoSuchEntityException";
import { ServiceFailureException } from "./ServiceFailureException";
export type UpdateOpenIDConnectProviderThumbprintExceptionsUnion =
  | InvalidInputException
  | NoSuchEntityException
  | ServiceFailureException;
