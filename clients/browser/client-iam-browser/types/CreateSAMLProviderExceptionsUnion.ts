import { InvalidInputException } from "./InvalidInputException";
import { EntityAlreadyExistsException } from "./EntityAlreadyExistsException";
import { LimitExceededException } from "./LimitExceededException";
import { ServiceFailureException } from "./ServiceFailureException";
export type CreateSAMLProviderExceptionsUnion =
  | InvalidInputException
  | EntityAlreadyExistsException
  | LimitExceededException
  | ServiceFailureException;
