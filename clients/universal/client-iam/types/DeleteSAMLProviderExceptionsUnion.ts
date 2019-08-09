import { InvalidInputException } from "./InvalidInputException";
import { LimitExceededException } from "./LimitExceededException";
import { NoSuchEntityException } from "./NoSuchEntityException";
import { ServiceFailureException } from "./ServiceFailureException";
export type DeleteSAMLProviderExceptionsUnion =
  | InvalidInputException
  | LimitExceededException
  | NoSuchEntityException
  | ServiceFailureException;
