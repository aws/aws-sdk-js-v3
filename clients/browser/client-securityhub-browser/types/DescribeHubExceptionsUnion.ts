import { InternalException } from "./InternalException";
import { LimitExceededException } from "./LimitExceededException";
import { InvalidAccessException } from "./InvalidAccessException";
import { InvalidInputException } from "./InvalidInputException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
export type DescribeHubExceptionsUnion =
  | InternalException
  | LimitExceededException
  | InvalidAccessException
  | InvalidInputException
  | ResourceNotFoundException;
