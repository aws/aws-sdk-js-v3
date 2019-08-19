import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { LimitExceededException } from "./LimitExceededException";
export type DescribeStreamSummaryExceptionsUnion =
  | ResourceNotFoundException
  | LimitExceededException;
