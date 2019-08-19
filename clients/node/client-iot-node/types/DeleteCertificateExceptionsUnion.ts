import { CertificateStateException } from "./CertificateStateException";
import { DeleteConflictException } from "./DeleteConflictException";
import { InvalidRequestException } from "./InvalidRequestException";
import { ThrottlingException } from "./ThrottlingException";
import { UnauthorizedException } from "./UnauthorizedException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { InternalFailureException } from "./InternalFailureException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
export type DeleteCertificateExceptionsUnion =
  | CertificateStateException
  | DeleteConflictException
  | InvalidRequestException
  | ThrottlingException
  | UnauthorizedException
  | ServiceUnavailableException
  | InternalFailureException
  | ResourceNotFoundException;
