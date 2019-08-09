import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { RequestInProgressException } from "./RequestInProgressException";
import { InvalidArnException } from "./InvalidArnException";
export type ExportCertificateExceptionsUnion =
  | ResourceNotFoundException
  | RequestInProgressException
  | InvalidArnException;
