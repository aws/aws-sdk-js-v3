import { AlreadyExistsException } from "./AlreadyExistsException";
import { LimitExceededException } from "./LimitExceededException";
export type CreateReceiptRuleSetExceptionsUnion =
  | AlreadyExistsException
  | LimitExceededException;
