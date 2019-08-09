import { ResourceLimitExceededException } from "./ResourceLimitExceededException";
import { ResourceAlreadyExistsException } from "./ResourceAlreadyExistsException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ResourceUnavailableException } from "./ResourceUnavailableException";
import { OperationNotSupportedException } from "./OperationNotSupportedException";
import { AccessDeniedException } from "./AccessDeniedException";
import { InvalidParameterValuesException } from "./InvalidParameterValuesException";
export type CopyWorkspaceImageExceptionsUnion =
  | ResourceLimitExceededException
  | ResourceAlreadyExistsException
  | ResourceNotFoundException
  | ResourceUnavailableException
  | OperationNotSupportedException
  | AccessDeniedException
  | InvalidParameterValuesException;
