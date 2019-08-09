import { AccessDeniedException } from "./AccessDeniedException";
import { ThrottlingException } from "./ThrottlingException";
import { InternalServiceErrorException } from "./InternalServiceErrorException";
export type ListSigningProfilesExceptionsUnion =
  | AccessDeniedException
  | ThrottlingException
  | InternalServiceErrorException;
