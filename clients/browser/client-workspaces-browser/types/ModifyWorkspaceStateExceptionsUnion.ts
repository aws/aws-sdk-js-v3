import { InvalidParameterValuesException } from "./InvalidParameterValuesException";
import { InvalidResourceStateException } from "./InvalidResourceStateException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
export type ModifyWorkspaceStateExceptionsUnion =
  | InvalidParameterValuesException
  | InvalidResourceStateException
  | ResourceNotFoundException;
