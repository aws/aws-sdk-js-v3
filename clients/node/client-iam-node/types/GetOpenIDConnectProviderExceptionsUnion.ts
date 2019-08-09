import { InvalidInputException } from "./InvalidInputException";
import { NoSuchEntityException } from "./NoSuchEntityException";
import { ServiceFailureException } from "./ServiceFailureException";
export type GetOpenIDConnectProviderExceptionsUnion =
  | InvalidInputException
  | NoSuchEntityException
  | ServiceFailureException;
