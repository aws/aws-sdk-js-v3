import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { CertificateStateException } from "./CertificateStateException";
import { InvalidRequestException } from "./InvalidRequestException";
import { ThrottlingException } from "./ThrottlingException";
import { UnauthorizedException } from "./UnauthorizedException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { InternalFailureException } from "./InternalFailureException";
export type UpdateCertificateExceptionsUnion =
  | ResourceNotFoundException
  | CertificateStateException
  | InvalidRequestException
  | ThrottlingException
  | UnauthorizedException
  | ServiceUnavailableException
  | InternalFailureException;
