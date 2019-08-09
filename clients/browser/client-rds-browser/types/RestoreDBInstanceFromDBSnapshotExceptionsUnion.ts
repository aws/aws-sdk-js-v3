import { DBInstanceAlreadyExistsFault } from "./DBInstanceAlreadyExistsFault";
import { DBSnapshotNotFoundFault } from "./DBSnapshotNotFoundFault";
import { InstanceQuotaExceededFault } from "./InstanceQuotaExceededFault";
import { InsufficientDBInstanceCapacityFault } from "./InsufficientDBInstanceCapacityFault";
import { InvalidDBSnapshotStateFault } from "./InvalidDBSnapshotStateFault";
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
import { DBParameterGroupNotFoundFault } from "./DBParameterGroupNotFoundFault";
import { BackupPolicyNotFoundFault } from "./BackupPolicyNotFoundFault";
export type RestoreDBInstanceFromDBSnapshotExceptionsUnion =
  | DBInstanceAlreadyExistsFault
  | DBSnapshotNotFoundFault
  | InstanceQuotaExceededFault
  | InsufficientDBInstanceCapacityFault
  | InvalidDBSnapshotStateFault
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
  | DBParameterGroupNotFoundFault
  | BackupPolicyNotFoundFault;
