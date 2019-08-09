import { NotFoundException } from "./NotFoundException";
import { NameInUseException } from "./NameInUseException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
import { InvalidCertificateAuthorityException } from "./InvalidCertificateAuthorityException";
import { InvalidSecretsManagerResourceException } from "./InvalidSecretsManagerResourceException";
export type UpdateNetworkProfileExceptionsUnion =
  | NotFoundException
  | NameInUseException
  | ConcurrentModificationException
  | InvalidCertificateAuthorityException
  | InvalidSecretsManagerResourceException;
