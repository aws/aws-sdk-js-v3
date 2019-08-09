import { ValidationException } from "./ValidationException";
import { IncompatibleVersionException } from "./IncompatibleVersionException";
import { AccessDeniedException } from "./AccessDeniedException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { LimitExceededException } from "./LimitExceededException";
import { InternalServiceException } from "./InternalServiceException";
export type CreatePipelineExceptionsUnion =
  | ValidationException
  | IncompatibleVersionException
  | AccessDeniedException
  | ResourceNotFoundException
  | LimitExceededException
  | InternalServiceException;
