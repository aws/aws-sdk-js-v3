import { ResourceAlreadyExistsFault } from "./ResourceAlreadyExistsFault";
import { InvalidCertificateFault } from "./InvalidCertificateFault";
import { ResourceQuotaExceededFault } from "./ResourceQuotaExceededFault";
export type ImportCertificateExceptionsUnion =
  | ResourceAlreadyExistsFault
  | InvalidCertificateFault
  | ResourceQuotaExceededFault;
