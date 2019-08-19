import { InternalException } from "./InternalException";
import { InvalidInputException } from "./InvalidInputException";
import { LimitExceededException } from "./LimitExceededException";
import { InvalidAccessException } from "./InvalidAccessException";
import { ResourceConflictException } from "./ResourceConflictException";
export type CreateMembersExceptionsUnion =
  | InternalException
  | InvalidInputException
  | LimitExceededException
  | InvalidAccessException
  | ResourceConflictException;
