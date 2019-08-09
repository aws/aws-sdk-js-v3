import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidParametersException } from "./InvalidParametersException";
import { OperationNotSupportedException } from "./OperationNotSupportedException";
import { InvalidStateException } from "./InvalidStateException";
export type DeletePortfolioShareExceptionsUnion =
  | ResourceNotFoundException
  | InvalidParametersException
  | OperationNotSupportedException
  | InvalidStateException;
