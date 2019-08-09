import { AlreadyExistsException } from "./AlreadyExistsException";
import { LimitExceededException } from "./LimitExceededException";
export type CreateAddressBookExceptionsUnion =
  | AlreadyExistsException
  | LimitExceededException;
