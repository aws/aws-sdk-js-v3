import { InternalException } from "./InternalException";
import { InvalidInputException } from "./InvalidInputException";
import { InvalidAccessException } from "./InvalidAccessException";
import { ResourceConflictException } from "./ResourceConflictException";
import { LimitExceededException } from "./LimitExceededException";
export type EnableImportFindingsForProductExceptionsUnion =
  | InternalException
  | InvalidInputException
  | InvalidAccessException
  | ResourceConflictException
  | LimitExceededException;
