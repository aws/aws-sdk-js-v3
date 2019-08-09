import { InvalidParameterException } from "./InvalidParameterException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationAbortedException } from "./OperationAbortedException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
export type DisassociateKmsKeyExceptionsUnion =
  | InvalidParameterException
  | ResourceNotFoundException
  | OperationAbortedException
  | ServiceUnavailableException;
