import { InternalException } from "./InternalException";
import { InvalidInputException } from "./InvalidInputException";
import { InvalidAccessException } from "./InvalidAccessException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
export type DescribeActionTargetsExceptionsUnion =
  | InternalException
  | InvalidInputException
  | InvalidAccessException
  | ResourceNotFoundException;
