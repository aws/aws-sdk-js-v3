import { InvalidParameterValuesException } from "./InvalidParameterValuesException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { AccessDeniedException } from "./AccessDeniedException";
export type ModifyClientPropertiesExceptionsUnion =
  | InvalidParameterValuesException
  | ResourceNotFoundException
  | AccessDeniedException;
