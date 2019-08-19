import { LimitExceededException } from "./LimitExceededException";
import { AlreadyExistsException } from "./AlreadyExistsException";
export type CreateReceiptFilterExceptionsUnion =
  | LimitExceededException
  | AlreadyExistsException;
