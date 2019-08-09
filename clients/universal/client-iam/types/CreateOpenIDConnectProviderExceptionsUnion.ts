import { InvalidInputException } from "./InvalidInputException";
import { EntityAlreadyExistsException } from "./EntityAlreadyExistsException";
import { LimitExceededException } from "./LimitExceededException";
import { ServiceFailureException } from "./ServiceFailureException";
export type CreateOpenIDConnectProviderExceptionsUnion =
  | InvalidInputException
  | EntityAlreadyExistsException
  | LimitExceededException
  | ServiceFailureException;
