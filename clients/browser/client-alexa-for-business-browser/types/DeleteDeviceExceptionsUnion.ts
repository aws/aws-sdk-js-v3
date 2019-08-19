import { NotFoundException } from "./NotFoundException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
import { InvalidCertificateAuthorityException } from "./InvalidCertificateAuthorityException";
export type DeleteDeviceExceptionsUnion =
  | NotFoundException
  | ConcurrentModificationException
  | InvalidCertificateAuthorityException;
