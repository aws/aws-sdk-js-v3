import { ConcurrentModificationException } from "./ConcurrentModificationException";
import { RequestInProgressException } from "./RequestInProgressException";
import { RequestFailedException } from "./RequestFailedException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidArnException } from "./InvalidArnException";
import { InvalidRequestException } from "./InvalidRequestException";
import { InvalidStateException } from "./InvalidStateException";
import { MalformedCertificateException } from "./MalformedCertificateException";
import { CertificateMismatchException } from "./CertificateMismatchException";
export type ImportCertificateAuthorityCertificateExceptionsUnion =
  | ConcurrentModificationException
  | RequestInProgressException
  | RequestFailedException
  | ResourceNotFoundException
  | InvalidArnException
  | InvalidRequestException
  | InvalidStateException
  | MalformedCertificateException
  | CertificateMismatchException;
