import { ConcurrentModificationException } from "./ConcurrentModificationException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidArgsException } from "./InvalidArgsException";
import { InvalidArnException } from "./InvalidArnException";
import { InvalidStateException } from "./InvalidStateException";
import { InvalidPolicyException } from "./InvalidPolicyException";
export type UpdateCertificateAuthorityExceptionsUnion =
  | ConcurrentModificationException
  | ResourceNotFoundException
  | InvalidArgsException
  | InvalidArnException
  | InvalidStateException
  | InvalidPolicyException;
