import { BaseException } from "./BaseException";
import { InternalException } from "./InternalException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
export type DescribeExpressionsExceptionsUnion =
  | BaseException
  | InternalException
  | ResourceNotFoundException;
