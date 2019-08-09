import { InvalidInputException } from "./InvalidInputException";
import { LimitExceededException } from "./LimitExceededException";
import { InternalException } from "./InternalException";
export type AssociateMemberAccountExceptionsUnion =
  | InvalidInputException
  | LimitExceededException
  | InternalException;
