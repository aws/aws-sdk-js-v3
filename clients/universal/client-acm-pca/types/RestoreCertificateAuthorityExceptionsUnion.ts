import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidStateException } from "./InvalidStateException";
import { InvalidArnException } from "./InvalidArnException";
export type RestoreCertificateAuthorityExceptionsUnion =
  | ResourceNotFoundException
  | InvalidStateException
  | InvalidArnException;
