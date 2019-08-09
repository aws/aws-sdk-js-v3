import { InternalException } from "./InternalException";
import { InvalidInputException } from "./InvalidInputException";
import { LimitExceededException } from "./LimitExceededException";
import { InvalidAccessException } from "./InvalidAccessException";
export type BatchImportFindingsExceptionsUnion =
  | InternalException
  | InvalidInputException
  | LimitExceededException
  | InvalidAccessException;
