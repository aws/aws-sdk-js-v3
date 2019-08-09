import { HsmClientCertificateNotFoundFault } from "./HsmClientCertificateNotFoundFault";
import { InvalidTagFault } from "./InvalidTagFault";
export type DescribeHsmClientCertificatesExceptionsUnion =
  | HsmClientCertificateNotFoundFault
  | InvalidTagFault;
