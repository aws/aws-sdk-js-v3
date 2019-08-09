import { ValidationException } from "./ValidationException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidNextTokenException } from "./InvalidNextTokenException";
export type DescribeServersExceptionsUnion =
  | ValidationException
  | ResourceNotFoundException
  | InvalidNextTokenException;
