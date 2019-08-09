import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidArnException } from "./InvalidArnException";
export type RenewCertificateExceptionsUnion =
  | ResourceNotFoundException
  | InvalidArnException;
