import { ValidationException } from "./ValidationException";
import { IncompatibleVersionException } from "./IncompatibleVersionException";
import { AccessDeniedException } from "./AccessDeniedException";
import { ResourceInUseException } from "./ResourceInUseException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InternalServiceException } from "./InternalServiceException";
export type UpdatePipelineExceptionsUnion =
  | ValidationException
  | IncompatibleVersionException
  | AccessDeniedException
  | ResourceInUseException
  | ResourceNotFoundException
  | InternalServiceException;
