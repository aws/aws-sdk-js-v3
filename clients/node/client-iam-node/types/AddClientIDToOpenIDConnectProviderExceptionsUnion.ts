import { InvalidInputException } from "./InvalidInputException";
import { NoSuchEntityException } from "./NoSuchEntityException";
import { LimitExceededException } from "./LimitExceededException";
import { ServiceFailureException } from "./ServiceFailureException";
export type AddClientIDToOpenIDConnectProviderExceptionsUnion =
  | InvalidInputException
  | NoSuchEntityException
  | LimitExceededException
  | ServiceFailureException;
