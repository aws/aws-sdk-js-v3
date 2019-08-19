import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { AccessDeniedException } from "./AccessDeniedException";
import { ValidationException } from "./ValidationException";
import { ThrottlingException } from "./ThrottlingException";
import { InternalServiceErrorException } from "./InternalServiceErrorException";
export type PutSigningProfileExceptionsUnion =
  | ResourceNotFoundException
  | AccessDeniedException
  | ValidationException
  | ThrottlingException
  | InternalServiceErrorException;
