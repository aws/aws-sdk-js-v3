import { InternalException } from "./InternalException";
import { InvalidInputException } from "./InvalidInputException";
import { LimitExceededException } from "./LimitExceededException";
import { InvalidAccessException } from "./InvalidAccessException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
export type UpdateFindingsExceptionsUnion =
  | InternalException
  | InvalidInputException
  | LimitExceededException
  | InvalidAccessException
  | ResourceNotFoundException;
