import { AlreadyExistsException } from "./AlreadyExistsException";
import { LimitExceededException } from "./LimitExceededException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
import { InvalidCertificateAuthorityException } from "./InvalidCertificateAuthorityException";
import { InvalidServiceLinkedRoleStateException } from "./InvalidServiceLinkedRoleStateException";
export type CreateNetworkProfileExceptionsUnion =
  | AlreadyExistsException
  | LimitExceededException
  | ConcurrentModificationException
  | InvalidCertificateAuthorityException
  | InvalidServiceLinkedRoleStateException;
