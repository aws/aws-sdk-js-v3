import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { LimitExceededException } from "./LimitExceededException";
import { InvalidParametersException } from "./InvalidParametersException";
import { OperationNotSupportedException } from "./OperationNotSupportedException";
import { InvalidStateException } from "./InvalidStateException";
export type CreatePortfolioShareExceptionsUnion =
  | ResourceNotFoundException
  | LimitExceededException
  | InvalidParametersException
  | OperationNotSupportedException
  | InvalidStateException;
