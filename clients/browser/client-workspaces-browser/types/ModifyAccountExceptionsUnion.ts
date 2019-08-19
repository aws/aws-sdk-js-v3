import { InvalidParameterValuesException } from "./InvalidParameterValuesException";
import { AccessDeniedException } from "./AccessDeniedException";
import { InvalidResourceStateException } from "./InvalidResourceStateException";
import { ResourceUnavailableException } from "./ResourceUnavailableException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
export type ModifyAccountExceptionsUnion =
  | InvalidParameterValuesException
  | AccessDeniedException
  | InvalidResourceStateException
  | ResourceUnavailableException
  | ResourceNotFoundException;
