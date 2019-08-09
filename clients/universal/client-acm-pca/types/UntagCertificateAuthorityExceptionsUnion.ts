import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidArnException } from "./InvalidArnException";
import { InvalidStateException } from "./InvalidStateException";
import { InvalidTagException } from "./InvalidTagException";
export type UntagCertificateAuthorityExceptionsUnion =
  | ResourceNotFoundException
  | InvalidArnException
  | InvalidStateException
  | InvalidTagException;
