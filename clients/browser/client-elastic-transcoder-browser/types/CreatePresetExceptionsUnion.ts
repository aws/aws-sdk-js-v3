import { ValidationException } from "./ValidationException";
import { IncompatibleVersionException } from "./IncompatibleVersionException";
import { AccessDeniedException } from "./AccessDeniedException";
import { LimitExceededException } from "./LimitExceededException";
import { InternalServiceException } from "./InternalServiceException";
export type CreatePresetExceptionsUnion =
  | ValidationException
  | IncompatibleVersionException
  | AccessDeniedException
  | LimitExceededException
  | InternalServiceException;
