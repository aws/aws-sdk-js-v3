import { ResourceAlreadyExistsException } from "./ResourceAlreadyExistsException";
import { InvalidRequestException } from "./InvalidRequestException";
import { CertificateValidationException } from "./CertificateValidationException";
import { CertificateStateException } from "./CertificateStateException";
import { CertificateConflictException } from "./CertificateConflictException";
import { ThrottlingException } from "./ThrottlingException";
import { UnauthorizedException } from "./UnauthorizedException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { InternalFailureException } from "./InternalFailureException";
export type RegisterCertificateExceptionsUnion =
  | ResourceAlreadyExistsException
  | InvalidRequestException
  | CertificateValidationException
  | CertificateStateException
  | CertificateConflictException
  | ThrottlingException
  | UnauthorizedException
  | ServiceUnavailableException
  | InternalFailureException;
