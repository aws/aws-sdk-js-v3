import { DBInstanceAlreadyExistsFault } from "./DBInstanceAlreadyExistsFault";
import { InsufficientDBInstanceCapacityFault } from "./InsufficientDBInstanceCapacityFault";
import { DBParameterGroupNotFoundFault } from "./DBParameterGroupNotFoundFault";
import { DBSecurityGroupNotFoundFault } from "./DBSecurityGroupNotFoundFault";
import { InstanceQuotaExceededFault } from "./InstanceQuotaExceededFault";
import { StorageQuotaExceededFault } from "./StorageQuotaExceededFault";
import { DBSubnetGroupNotFoundFault } from "./DBSubnetGroupNotFoundFault";
import { DBSubnetGroupDoesNotCoverEnoughAZs } from "./DBSubnetGroupDoesNotCoverEnoughAZs";
import { InvalidSubnet } from "./InvalidSubnet";
import { InvalidVPCNetworkStateFault } from "./InvalidVPCNetworkStateFault";
import { InvalidS3BucketFault } from "./InvalidS3BucketFault";
import { ProvisionedIopsNotAvailableInAZFault } from "./ProvisionedIopsNotAvailableInAZFault";
import { OptionGroupNotFoundFault } from "./OptionGroupNotFoundFault";
import { StorageTypeNotSupportedFault } from "./StorageTypeNotSupportedFault";
import { AuthorizationNotFoundFault } from "./AuthorizationNotFoundFault";
import { KMSKeyNotAccessibleFault } from "./KMSKeyNotAccessibleFault";
import { BackupPolicyNotFoundFault } from "./BackupPolicyNotFoundFault";
export type RestoreDBInstanceFromS3ExceptionsUnion =
  | DBInstanceAlreadyExistsFault
  | InsufficientDBInstanceCapacityFault
  | DBParameterGroupNotFoundFault
  | DBSecurityGroupNotFoundFault
  | InstanceQuotaExceededFault
  | StorageQuotaExceededFault
  | DBSubnetGroupNotFoundFault
  | DBSubnetGroupDoesNotCoverEnoughAZs
  | InvalidSubnet
  | InvalidVPCNetworkStateFault
  | InvalidS3BucketFault
  | ProvisionedIopsNotAvailableInAZFault
  | OptionGroupNotFoundFault
  | StorageTypeNotSupportedFault
  | AuthorizationNotFoundFault
  | KMSKeyNotAccessibleFault
  | BackupPolicyNotFoundFault;
