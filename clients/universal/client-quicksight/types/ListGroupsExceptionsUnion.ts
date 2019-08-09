import { AccessDeniedException } from "./AccessDeniedException";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ThrottlingException } from "./ThrottlingException";
import { InvalidNextTokenException } from "./InvalidNextTokenException";
import { PreconditionNotMetException } from "./PreconditionNotMetException";
import { InternalFailureException } from "./InternalFailureException";
import { ResourceUnavailableException } from "./ResourceUnavailableException";
export type ListGroupsExceptionsUnion =
  | AccessDeniedException
  | InvalidParameterValueException
  | ResourceNotFoundException
  | ThrottlingException
  | InvalidNextTokenException
  | PreconditionNotMetException
  | InternalFailureException
  | ResourceUnavailableException;
