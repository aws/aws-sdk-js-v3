import { InternalException } from "./InternalException";
import { InvalidInputException } from "./InvalidInputException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidAccessException } from "./InvalidAccessException";
export type UpdateActionTargetExceptionsUnion =
  | InternalException
  | InvalidInputException
  | ResourceNotFoundException
  | InvalidAccessException;
