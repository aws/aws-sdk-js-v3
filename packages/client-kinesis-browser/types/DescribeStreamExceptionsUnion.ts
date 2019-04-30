import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { LimitExceededException } from "./LimitExceededException";
export type DescribeStreamExceptionsUnion =
  | ResourceNotFoundException
  | LimitExceededException;
