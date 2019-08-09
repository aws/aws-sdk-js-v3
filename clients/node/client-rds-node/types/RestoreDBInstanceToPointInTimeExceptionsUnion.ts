import { DBInstanceAlreadyExistsFault } from "./DBInstanceAlreadyExistsFault";
import { DBInstanceNotFoundFault } from "./DBInstanceNotFoundFault";
import { InstanceQuotaExceededFault } from "./InstanceQuotaExceededFault";
import { InsufficientDBInstanceCapacityFault } from "./InsufficientDBInstanceCapacityFault";
import { InvalidDBInstanceStateFault } from "./InvalidDBInstanceStateFault";
import { PointInTimeRestoreNotEnabledFault } from "./PointInTimeRestoreNotEnabledFault";
import { StorageQuotaExceededFault } from "./StorageQuotaExceededFault";
import { InvalidVPCNetworkStateFault } from "./InvalidVPCNetworkStateFault";
import { InvalidRestoreFault } from "./InvalidRestoreFault";
import { DBSubnetGroupNotFoundFault } from "./DBSubnetGroupNotFoundFault";
import { DBSubnetGroupDoesNotCoverEnoughAZs } from "./DBSubnetGroupDoesNotCoverEnoughAZs";
import { InvalidSubnet } from "./InvalidSubnet";
import { ProvisionedIopsNotAvailableInAZFault } from "./ProvisionedIopsNotAvailableInAZFault";
import { OptionGroupNotFoundFault } from "./OptionGroupNotFoundFault";
import { StorageTypeNotSupportedFault } from "./StorageTypeNotSupportedFault";
import { AuthorizationNotFoundFault } from "./AuthorizationNotFoundFault";
import { KMSKeyNotAccessibleFault } from "./KMSKeyNotAccessibleFault";
import { DBSecurityGroupNotFoundFault } from "./DBSecurityGroupNotFoundFault";
import { DomainNotFoundFault } from "./DomainNotFoundFault";
import { BackupPolicyNotFoundFault } from "./BackupPolicyNotFoundFault";
import { DBParameterGroupNotFoundFault } from "./DBParameterGroupNotFoundFault";
import { DBInstanceAutomatedBackupNotFoundFault } from "./DBInstanceAutomatedBackupNotFoundFault";
export type RestoreDBInstanceToPointInTimeExceptionsUnion =
  | DBInstanceAlreadyExistsFault
  | DBInstanceNotFoundFault
  | InstanceQuotaExceededFault
  | InsufficientDBInstanceCapacityFault
  | InvalidDBInstanceStateFault
  | PointInTimeRestoreNotEnabledFault
  | StorageQuotaExceededFault
  | InvalidVPCNetworkStateFault
  | InvalidRestoreFault
  | DBSubnetGroupNotFoundFault
  | DBSubnetGroupDoesNotCoverEnoughAZs
  | InvalidSubnet
  | ProvisionedIopsNotAvailableInAZFault
  | OptionGroupNotFoundFault
  | StorageTypeNotSupportedFault
  | AuthorizationNotFoundFault
  | KMSKeyNotAccessibleFault
  | DBSecurityGroupNotFoundFault
  | DomainNotFoundFault
  | BackupPolicyNotFoundFault
  | DBParameterGroupNotFoundFault
  | DBInstanceAutomatedBackupNotFoundFault;
