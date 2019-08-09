import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { AccessDeniedException } from "./AccessDeniedException";
import { InternalServiceErrorException } from "./InternalServiceErrorException";
export type GetSigningPlatformExceptionsUnion =
  | ResourceNotFoundException
  | AccessDeniedException
  | InternalServiceErrorException;
