import { AccessDeniedException } from "./AccessDeniedException";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { ResourceExistsException } from "./ResourceExistsException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ThrottlingException } from "./ThrottlingException";
import { PreconditionNotMetException } from "./PreconditionNotMetException";
import { LimitExceededException } from "./LimitExceededException";
import { InternalFailureException } from "./InternalFailureException";
import { ResourceUnavailableException } from "./ResourceUnavailableException";
export type CreateGroupExceptionsUnion =
  | AccessDeniedException
  | InvalidParameterValueException
  | ResourceExistsException
  | ResourceNotFoundException
  | ThrottlingException
  | PreconditionNotMetException
  | LimitExceededException
  | InternalFailureException
  | ResourceUnavailableException;
