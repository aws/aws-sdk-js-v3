import { AlreadyExistsException } from "./AlreadyExistsException";
import { LimitExceededException } from "./LimitExceededException";
export type CreateContactExceptionsUnion =
  | AlreadyExistsException
  | LimitExceededException;
