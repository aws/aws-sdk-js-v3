import { InvalidRequestException } from "./InvalidRequestException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ThrottlingException } from "./ThrottlingException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { CertificateValidationException } from "./CertificateValidationException";
import { InvalidStateTransitionException } from "./InvalidStateTransitionException";
export type UpdateJobExecutionExceptionsUnion =
  | InvalidRequestException
  | ResourceNotFoundException
  | ThrottlingException
  | ServiceUnavailableException
  | CertificateValidationException
  | InvalidStateTransitionException;
