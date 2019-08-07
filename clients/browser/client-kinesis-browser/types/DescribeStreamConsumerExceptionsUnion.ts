import { LimitExceededException } from "./LimitExceededException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidArgumentException } from "./InvalidArgumentException";
export type DescribeStreamConsumerExceptionsUnion =
  | LimitExceededException
  | ResourceNotFoundException
  | InvalidArgumentException;
