import { ResourceAlreadyExistsException } from "./ResourceAlreadyExistsException";
import { RegistrationCodeValidationException } from "./RegistrationCodeValidationException";
import { InvalidRequestException } from "./InvalidRequestException";
import { CertificateValidationException } from "./CertificateValidationException";
import { ThrottlingException } from "./ThrottlingException";
import { LimitExceededException } from "./LimitExceededException";
import { UnauthorizedException } from "./UnauthorizedException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { InternalFailureException } from "./InternalFailureException";
export type RegisterCACertificateExceptionsUnion =
  | ResourceAlreadyExistsException
  | RegistrationCodeValidationException
  | InvalidRequestException
  | CertificateValidationException
  | ThrottlingException
  | LimitExceededException
  | UnauthorizedException
  | ServiceUnavailableException
  | InternalFailureException;
