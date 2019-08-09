import { InvalidParameterValuesException } from "./InvalidParameterValuesException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ResourceLimitExceededException } from "./ResourceLimitExceededException";
import { InvalidResourceStateException } from "./InvalidResourceStateException";
import { AccessDeniedException } from "./AccessDeniedException";
export type AuthorizeIpRulesExceptionsUnion =
  | InvalidParameterValuesException
  | ResourceNotFoundException
  | ResourceLimitExceededException
  | InvalidResourceStateException
  | AccessDeniedException;
