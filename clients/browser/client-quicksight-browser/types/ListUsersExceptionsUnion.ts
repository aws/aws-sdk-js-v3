import { AccessDeniedException } from "./AccessDeniedException";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ThrottlingException } from "./ThrottlingException";
import { InvalidNextTokenException } from "./InvalidNextTokenException";
import { InternalFailureException } from "./InternalFailureException";
import { ResourceUnavailableException } from "./ResourceUnavailableException";
export type ListUsersExceptionsUnion =
  | AccessDeniedException
  | InvalidParameterValueException
  | ResourceNotFoundException
  | ThrottlingException
  | InvalidNextTokenException
  | InternalFailureException
  | ResourceUnavailableException;
