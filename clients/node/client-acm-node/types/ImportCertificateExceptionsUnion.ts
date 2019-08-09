import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { LimitExceededException } from "./LimitExceededException";
export type ImportCertificateExceptionsUnion =
  | ResourceNotFoundException
  | LimitExceededException;
