import { AccessDeniedException } from "./AccessDeniedException";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ThrottlingException } from "./ThrottlingException";
import { LimitExceededException } from "./LimitExceededException";
import { ResourceExistsException } from "./ResourceExistsException";
import { PreconditionNotMetException } from "./PreconditionNotMetException";
import { InternalFailureException } from "./InternalFailureException";
import { ResourceUnavailableException } from "./ResourceUnavailableException";
export type RegisterUserExceptionsUnion =
  | AccessDeniedException
  | InvalidParameterValueException
  | ResourceNotFoundException
  | ThrottlingException
  | LimitExceededException
  | ResourceExistsException
  | PreconditionNotMetException
  | InternalFailureException
  | ResourceUnavailableException;
