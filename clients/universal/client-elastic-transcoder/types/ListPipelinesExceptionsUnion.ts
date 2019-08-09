import { ValidationException } from "./ValidationException";
import { IncompatibleVersionException } from "./IncompatibleVersionException";
import { AccessDeniedException } from "./AccessDeniedException";
import { InternalServiceException } from "./InternalServiceException";
export type ListPipelinesExceptionsUnion =
  | ValidationException
  | IncompatibleVersionException
  | AccessDeniedException
  | InternalServiceException;
