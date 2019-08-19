import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { AccessDeniedException } from "./AccessDeniedException";
import { ThrottlingException } from "./ThrottlingException";
import { InternalServiceErrorException } from "./InternalServiceErrorException";
export type GetSigningProfileExceptionsUnion =
  | ResourceNotFoundException
  | AccessDeniedException
  | ThrottlingException
  | InternalServiceErrorException;
