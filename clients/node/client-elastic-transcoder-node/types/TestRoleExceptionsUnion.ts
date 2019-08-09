import { ValidationException } from "./ValidationException";
import { IncompatibleVersionException } from "./IncompatibleVersionException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { AccessDeniedException } from "./AccessDeniedException";
import { InternalServiceException } from "./InternalServiceException";
export type TestRoleExceptionsUnion =
  | ValidationException
  | IncompatibleVersionException
  | ResourceNotFoundException
  | AccessDeniedException
  | InternalServiceException;
