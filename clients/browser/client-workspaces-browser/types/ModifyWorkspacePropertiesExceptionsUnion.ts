import { InvalidParameterValuesException } from "./InvalidParameterValuesException";
import { InvalidResourceStateException } from "./InvalidResourceStateException";
import { OperationInProgressException } from "./OperationInProgressException";
import { UnsupportedWorkspaceConfigurationException } from "./UnsupportedWorkspaceConfigurationException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { AccessDeniedException } from "./AccessDeniedException";
import { ResourceUnavailableException } from "./ResourceUnavailableException";
export type ModifyWorkspacePropertiesExceptionsUnion =
  | InvalidParameterValuesException
  | InvalidResourceStateException
  | OperationInProgressException
  | UnsupportedWorkspaceConfigurationException
  | ResourceNotFoundException
  | AccessDeniedException
  | ResourceUnavailableException;
