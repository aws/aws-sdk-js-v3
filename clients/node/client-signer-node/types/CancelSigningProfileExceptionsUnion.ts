import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { AccessDeniedException } from "./AccessDeniedException";
import { ThrottlingException } from "./ThrottlingException";
import { InternalServiceErrorException } from "./InternalServiceErrorException";
export type CancelSigningProfileExceptionsUnion =
  | ResourceNotFoundException
  | AccessDeniedException
  | ThrottlingException
  | InternalServiceErrorException;
