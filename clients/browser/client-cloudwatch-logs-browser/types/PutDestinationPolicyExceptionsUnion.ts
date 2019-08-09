import { InvalidParameterException } from "./InvalidParameterException";
import { OperationAbortedException } from "./OperationAbortedException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
export type PutDestinationPolicyExceptionsUnion =
  | InvalidParameterException
  | OperationAbortedException
  | ServiceUnavailableException;
