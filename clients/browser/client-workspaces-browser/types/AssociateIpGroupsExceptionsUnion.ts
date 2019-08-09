import { InvalidParameterValuesException } from "./InvalidParameterValuesException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ResourceLimitExceededException } from "./ResourceLimitExceededException";
import { InvalidResourceStateException } from "./InvalidResourceStateException";
import { AccessDeniedException } from "./AccessDeniedException";
import { OperationNotSupportedException } from "./OperationNotSupportedException";
export type AssociateIpGroupsExceptionsUnion =
  | InvalidParameterValuesException
  | ResourceNotFoundException
  | ResourceLimitExceededException
  | InvalidResourceStateException
  | AccessDeniedException
  | OperationNotSupportedException;
