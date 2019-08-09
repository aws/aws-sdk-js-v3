import { InvalidHsmClientCertificateStateFault } from "./InvalidHsmClientCertificateStateFault";
import { HsmClientCertificateNotFoundFault } from "./HsmClientCertificateNotFoundFault";
export type DeleteHsmClientCertificateExceptionsUnion =
  | InvalidHsmClientCertificateStateFault
  | HsmClientCertificateNotFoundFault;
