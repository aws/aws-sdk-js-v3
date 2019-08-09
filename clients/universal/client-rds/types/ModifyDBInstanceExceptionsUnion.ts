import { InvalidDBInstanceStateFault } from "./InvalidDBInstanceStateFault";
import { InvalidDBSecurityGroupStateFault } from "./InvalidDBSecurityGroupStateFault";
import { DBInstanceAlreadyExistsFault } from "./DBInstanceAlreadyExistsFault";
import { DBInstanceNotFoundFault } from "./DBInstanceNotFoundFault";
import { DBSecurityGroupNotFoundFault } from "./DBSecurityGroupNotFoundFault";
import { DBParameterGroupNotFoundFault } from "./DBParameterGroupNotFoundFault";
import { InsufficientDBInstanceCapacityFault } from "./InsufficientDBInstanceCapacityFault";
import { StorageQuotaExceededFault } from "./StorageQuotaExceededFault";
import { InvalidVPCNetworkStateFault } from "./InvalidVPCNetworkStateFault";
import { ProvisionedIopsNotAvailableInAZFault } from "./ProvisionedIopsNotAvailableInAZFault";
import { OptionGroupNotFoundFault } from "./OptionGroupNotFoundFault";
import { DBUpgradeDependencyFailureFault } from "./DBUpgradeDependencyFailureFault";
import { StorageTypeNotSupportedFault } from "./StorageTypeNotSupportedFault";
import { AuthorizationNotFoundFault } from "./AuthorizationNotFoundFault";
import { CertificateNotFoundFault } from "./CertificateNotFoundFault";
import { DomainNotFoundFault } from "./DomainNotFoundFault";
import { BackupPolicyNotFoundFault } from "./BackupPolicyNotFoundFault";
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
  | ProvisionedIopsNotAvailableInAZFault
  | OptionGroupNotFoundFault
  | DBUpgradeDependencyFailureFault
  | StorageTypeNotSupportedFault
  | AuthorizationNotFoundFault
  | CertificateNotFoundFault
  | DomainNotFoundFault
  | BackupPolicyNotFoundFault;
