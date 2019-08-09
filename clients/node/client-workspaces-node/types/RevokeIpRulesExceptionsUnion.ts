import { InvalidParameterValuesException } from "./InvalidParameterValuesException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidResourceStateException } from "./InvalidResourceStateException";
import { AccessDeniedException } from "./AccessDeniedException";
export type RevokeIpRulesExceptionsUnion =
  | InvalidParameterValuesException
  | ResourceNotFoundException
  | InvalidResourceStateException
  | AccessDeniedException;
