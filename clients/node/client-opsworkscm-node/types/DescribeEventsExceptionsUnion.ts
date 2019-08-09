import { ValidationException } from "./ValidationException";
import { InvalidNextTokenException } from "./InvalidNextTokenException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
export type DescribeEventsExceptionsUnion =
  | ValidationException
  | InvalidNextTokenException
  | ResourceNotFoundException;
