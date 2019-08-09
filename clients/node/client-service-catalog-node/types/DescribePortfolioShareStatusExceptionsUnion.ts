import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidParametersException } from "./InvalidParametersException";
import { OperationNotSupportedException } from "./OperationNotSupportedException";
export type DescribePortfolioShareStatusExceptionsUnion =
  | ResourceNotFoundException
  | InvalidParametersException
  | OperationNotSupportedException;
