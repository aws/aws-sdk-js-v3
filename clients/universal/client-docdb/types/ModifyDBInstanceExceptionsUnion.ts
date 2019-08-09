import { InvalidDBInstanceStateFault } from "./InvalidDBInstanceStateFault";
import { InvalidDBSecurityGroupStateFault } from "./InvalidDBSecurityGroupStateFault";
import { DBInstanceAlreadyExistsFault } from "./DBInstanceAlreadyExistsFault";
import { DBInstanceNotFoundFault } from "./DBInstanceNotFoundFault";
import { DBSecurityGroupNotFoundFault } from "./DBSecurityGroupNotFoundFault";
import { DBParameterGroupNotFoundFault } from "./DBParameterGroupNotFoundFault";
import { InsufficientDBInstanceCapacityFault } from "./InsufficientDBInstanceCapacityFault";
import { StorageQuotaExceededFault } from "./StorageQuotaExceededFault";
import { InvalidVPCNetworkStateFault } from "./InvalidVPCNetworkStateFault";
import { DBUpgradeDependencyFailureFault } from "./DBUpgradeDependencyFailureFault";
import { StorageTypeNotSupportedFault } from "./StorageTypeNotSupportedFault";
import { AuthorizationNotFoundFault } from "./AuthorizationNotFoundFault";
import { CertificateNotFoundFault } from "./CertificateNotFoundFault";
export type ModifyDBInstanceExceptionsUnion =
  | InvalidDBInstanceStateFault
  | InvalidDBSecurityGroupStateFault
  | DBInstanceAlreadyExistsFault
  | DBInstanceNotFoundFault
  | DBSecurityGroupNotFoundFault
  | DBParameterGroupNotFoundFault
  | InsufficientDBInstanceCapacityFault
  | StorageQuotaExceededFault
  | InvalidVPCNetworkStateFault
  | DBUpgradeDependencyFailureFault
  | StorageTypeNotSupportedFault
  | AuthorizationNotFoundFault
  | CertificateNotFoundFault;
