import { DBInstanceAlreadyExistsFault } from "./DBInstanceAlreadyExistsFault";
import { InsufficientDBInstanceCapacityFault } from "./InsufficientDBInstanceCapacityFault";
import { DBParameterGroupNotFoundFault } from "./DBParameterGroupNotFoundFault";
import { DBSecurityGroupNotFoundFault } from "./DBSecurityGroupNotFoundFault";
import { InstanceQuotaExceededFault } from "./InstanceQuotaExceededFault";
import { StorageQuotaExceededFault } from "./StorageQuotaExceededFault";
import { DBInstanceNotFoundFault } from "./DBInstanceNotFoundFault";
import { InvalidDBInstanceStateFault } from "./InvalidDBInstanceStateFault";
import { DBSubnetGroupNotFoundFault } from "./DBSubnetGroupNotFoundFault";
import { DBSubnetGroupDoesNotCoverEnoughAZs } from "./DBSubnetGroupDoesNotCoverEnoughAZs";
import { InvalidSubnet } from "./InvalidSubnet";
import { InvalidVPCNetworkStateFault } from "./InvalidVPCNetworkStateFault";
import { ProvisionedIopsNotAvailableInAZFault } from "./ProvisionedIopsNotAvailableInAZFault";
import { OptionGroupNotFoundFault } from "./OptionGroupNotFoundFault";
import { DBSubnetGroupNotAllowedFault } from "./DBSubnetGroupNotAllowedFault";
import { InvalidDBSubnetGroupFault } from "./InvalidDBSubnetGroupFault";
import { StorageTypeNotSupportedFault } from "./StorageTypeNotSupportedFault";
import { KMSKeyNotAccessibleFault } from "./KMSKeyNotAccessibleFault";
export type CreateDBInstanceReadReplicaExceptionsUnion =
  | DBInstanceAlreadyExistsFault
  | InsufficientDBInstanceCapacityFault
  | DBParameterGroupNotFoundFault
  | DBSecurityGroupNotFoundFault
  | InstanceQuotaExceededFault
  | StorageQuotaExceededFault
  | DBInstanceNotFoundFault
  | InvalidDBInstanceStateFault
  | DBSubnetGroupNotFoundFault
  | DBSubnetGroupDoesNotCoverEnoughAZs
  | InvalidSubnet
  | InvalidVPCNetworkStateFault
  | ProvisionedIopsNotAvailableInAZFault
  | OptionGroupNotFoundFault
  | DBSubnetGroupNotAllowedFault
  | InvalidDBSubnetGroupFault
  | StorageTypeNotSupportedFault
  | KMSKeyNotAccessibleFault;
