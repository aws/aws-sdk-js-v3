import { ValidationException } from "./ValidationException";
import { AccessDeniedException } from "./AccessDeniedException";
import { ThrottlingException } from "./ThrottlingException";
import { InternalServiceErrorException } from "./InternalServiceErrorException";
export type ListSigningJobsExceptionsUnion =
  | ValidationException
  | AccessDeniedException
  | ThrottlingException
  | InternalServiceErrorException;
