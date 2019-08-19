import { ResourceLimitExceededException } from "./ResourceLimitExceededException";
import { ResourceAlreadyExistsException } from "./ResourceAlreadyExistsException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationNotSupportedException } from "./OperationNotSupportedException";
import { AccessDeniedException } from "./AccessDeniedException";
import { InvalidParameterValuesException } from "./InvalidParameterValuesException";
export type ImportWorkspaceImageExceptionsUnion =
  | ResourceLimitExceededException
  | ResourceAlreadyExistsException
  | ResourceNotFoundException
  | OperationNotSupportedException
  | AccessDeniedException
  | InvalidParameterValuesException;
