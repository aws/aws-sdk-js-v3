import { InternalException } from "./InternalException";
import { LimitExceededException } from "./LimitExceededException";
import { InvalidAccessException } from "./InvalidAccessException";
import { InvalidInputException } from "./InvalidInputException";
export type DescribeProductsExceptionsUnion =
  | InternalException
  | LimitExceededException
  | InvalidAccessException
  | InvalidInputException;
