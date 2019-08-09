import { NoSuchEntityException } from "./NoSuchEntityException";
import { InvalidInputException } from "./InvalidInputException";
import { LimitExceededException } from "./LimitExceededException";
import { ServiceFailureException } from "./ServiceFailureException";
export type UpdateSAMLProviderExceptionsUnion =
  | NoSuchEntityException
  | InvalidInputException
  | LimitExceededException
  | ServiceFailureException;
