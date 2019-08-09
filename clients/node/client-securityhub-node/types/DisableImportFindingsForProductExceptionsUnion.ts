import { InternalException } from "./InternalException";
import { InvalidInputException } from "./InvalidInputException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidAccessException } from "./InvalidAccessException";
import { LimitExceededException } from "./LimitExceededException";
export type DisableImportFindingsForProductExceptionsUnion =
  | InternalException
  | InvalidInputException
  | ResourceNotFoundException
  | InvalidAccessException
  | LimitExceededException;
