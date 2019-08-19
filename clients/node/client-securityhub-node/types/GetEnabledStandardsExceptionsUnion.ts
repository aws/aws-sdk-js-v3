import { InternalException } from "./InternalException";
import { InvalidInputException } from "./InvalidInputException";
import { InvalidAccessException } from "./InvalidAccessException";
import { LimitExceededException } from "./LimitExceededException";
export type GetEnabledStandardsExceptionsUnion =
  | InternalException
  | InvalidInputException
  | InvalidAccessException
  | LimitExceededException;
