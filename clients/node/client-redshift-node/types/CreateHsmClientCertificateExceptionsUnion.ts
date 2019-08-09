import { HsmClientCertificateAlreadyExistsFault } from "./HsmClientCertificateAlreadyExistsFault";
import { HsmClientCertificateQuotaExceededFault } from "./HsmClientCertificateQuotaExceededFault";
import { TagLimitExceededFault } from "./TagLimitExceededFault";
import { InvalidTagFault } from "./InvalidTagFault";
export type CreateHsmClientCertificateExceptionsUnion =
  | HsmClientCertificateAlreadyExistsFault
  | HsmClientCertificateQuotaExceededFault
  | TagLimitExceededFault
  | InvalidTagFault;
