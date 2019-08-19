import { InvalidRequestException } from "./InvalidRequestException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { CertificateStateException } from "./CertificateStateException";
import { TransferConflictException } from "./TransferConflictException";
import { ThrottlingException } from "./ThrottlingException";
import { UnauthorizedException } from "./UnauthorizedException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { InternalFailureException } from "./InternalFailureException";
export type TransferCertificateExceptionsUnion =
  | InvalidRequestException
  | ResourceNotFoundException
  | CertificateStateException
  | TransferConflictException
  | ThrottlingException
  | UnauthorizedException
  | ServiceUnavailableException
  | InternalFailureException;
