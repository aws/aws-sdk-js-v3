import { InvalidParameterException } from "./InvalidParameterException";
import { OperationAbortedException } from "./OperationAbortedException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
export type PutDestinationExceptionsUnion =
  | InvalidParameterException
  | OperationAbortedException
  | ServiceUnavailableException;
