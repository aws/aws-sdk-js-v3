import { InvalidParameterException } from "./InvalidParameterException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationAbortedException } from "./OperationAbortedException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
export type DeleteDestinationExceptionsUnion =
  | InvalidParameterException
  | ResourceNotFoundException
  | OperationAbortedException
  | ServiceUnavailableException;
