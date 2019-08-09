import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidArgumentException } from "./InvalidArgumentException";
import { InvalidRequestException } from "./InvalidRequestException";
export type DescribeApplicationExceptionsUnion =
  | ResourceNotFoundException
  | InvalidArgumentException
  | InvalidRequestException;
