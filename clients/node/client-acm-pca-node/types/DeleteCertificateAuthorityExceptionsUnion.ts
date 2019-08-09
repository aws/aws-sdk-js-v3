import { ConcurrentModificationException } from "./ConcurrentModificationException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidArnException } from "./InvalidArnException";
import { InvalidStateException } from "./InvalidStateException";
export type DeleteCertificateAuthorityExceptionsUnion =
  | ConcurrentModificationException
  | ResourceNotFoundException
  | InvalidArnException
  | InvalidStateException;
