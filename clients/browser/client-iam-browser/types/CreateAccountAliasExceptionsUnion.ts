import { EntityAlreadyExistsException } from "./EntityAlreadyExistsException";
import { LimitExceededException } from "./LimitExceededException";
import { ServiceFailureException } from "./ServiceFailureException";
export type CreateAccountAliasExceptionsUnion =
  | EntityAlreadyExistsException
  | LimitExceededException
  | ServiceFailureException;
