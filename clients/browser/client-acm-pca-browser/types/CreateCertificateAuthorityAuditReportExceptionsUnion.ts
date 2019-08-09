import { RequestInProgressException } from "./RequestInProgressException";
import { RequestFailedException } from "./RequestFailedException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidArnException } from "./InvalidArnException";
import { InvalidArgsException } from "./InvalidArgsException";
import { InvalidStateException } from "./InvalidStateException";
export type CreateCertificateAuthorityAuditReportExceptionsUnion =
  | RequestInProgressException
  | RequestFailedException
  | ResourceNotFoundException
  | InvalidArnException
  | InvalidArgsException
  | InvalidStateException;
