import { ValidationException } from "./ValidationException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { AccessDeniedException } from "./AccessDeniedException";
import { ThrottlingException } from "./ThrottlingException";
import { InternalServiceErrorException } from "./InternalServiceErrorException";
export type StartSigningJobExceptionsUnion =
  | ValidationException
  | ResourceNotFoundException
  | AccessDeniedException
  | ThrottlingException
  | InternalServiceErrorException;
