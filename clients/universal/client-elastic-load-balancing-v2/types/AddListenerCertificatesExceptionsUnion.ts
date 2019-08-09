import { ListenerNotFoundException } from "./ListenerNotFoundException";
import { TooManyCertificatesException } from "./TooManyCertificatesException";
import { CertificateNotFoundException } from "./CertificateNotFoundException";
export type AddListenerCertificatesExceptionsUnion =
  | ListenerNotFoundException
  | TooManyCertificatesException
  | CertificateNotFoundException;
