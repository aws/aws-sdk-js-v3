import { AccessDeniedException } from "./AccessDeniedException";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ThrottlingException } from "./ThrottlingException";
import { InternalFailureException } from "./InternalFailureException";
import { ResourceUnavailableException } from "./ResourceUnavailableException";
export type ListUserGroupsExceptionsUnion =
  | AccessDeniedException
  | InvalidParameterValueException
  | ResourceNotFoundException
  | ThrottlingException
  | InternalFailureException
  | ResourceUnavailableException;
