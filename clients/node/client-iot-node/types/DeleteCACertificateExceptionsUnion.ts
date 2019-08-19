import { InvalidRequestException } from "./InvalidRequestException";
import { CertificateStateException } from "./CertificateStateException";
import { ThrottlingException } from "./ThrottlingException";
import { UnauthorizedException } from "./UnauthorizedException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { InternalFailureException } from "./InternalFailureException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
export type DeleteCACertificateExceptionsUnion =
  | InvalidRequestException
  | CertificateStateException
  | ThrottlingException
  | UnauthorizedException
  | ServiceUnavailableException
  | InternalFailureException
  | ResourceNotFoundException;
