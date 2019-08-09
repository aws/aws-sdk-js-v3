import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidArnException } from "./InvalidArnException";
import { InvalidArgsException } from "./InvalidArgsException";
export type DescribeCertificateAuthorityAuditReportExceptionsUnion =
  | ResourceNotFoundException
  | InvalidArnException
  | InvalidArgsException;
