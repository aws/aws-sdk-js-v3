import { DBClusterAlreadyExistsFault } from "./DBClusterAlreadyExistsFault";
import { InsufficientStorageClusterCapacityFault } from "./InsufficientStorageClusterCapacityFault";
import { DBClusterQuotaExceededFault } from "./DBClusterQuotaExceededFault";
import { StorageQuotaExceededFault } from "./StorageQuotaExceededFault";
import { DBSubnetGroupNotFoundFault } from "./DBSubnetGroupNotFoundFault";
import { InvalidVPCNetworkStateFault } from "./InvalidVPCNetworkStateFault";
import { InvalidDBClusterStateFault } from "./InvalidDBClusterStateFault";
import { InvalidDBSubnetGroupStateFault } from "./InvalidDBSubnetGroupStateFault";
import { InvalidSubnet } from "./InvalidSubnet";
import { InvalidDBInstanceStateFault } from "./InvalidDBInstanceStateFault";
import { DBClusterParameterGroupNotFoundFault } from "./DBClusterParameterGroupNotFoundFault";
import { KMSKeyNotAccessibleFault } from "./KMSKeyNotAccessibleFault";
import { DBClusterNotFoundFault } from "./DBClusterNotFoundFault";
import { DBInstanceNotFoundFault } from "./DBInstanceNotFoundFault";
import { DBSubnetGroupDoesNotCoverEnoughAZs } from "./DBSubnetGroupDoesNotCoverEnoughAZs";
import { GlobalClusterNotFoundFault } from "./GlobalClusterNotFoundFault";
import { InvalidGlobalClusterStateFault } from "./InvalidGlobalClusterStateFault";
export type CreateDBClusterExceptionsUnion =
  | DBClusterAlreadyExistsFault
  | InsufficientStorageClusterCapacityFault
  | DBClusterQuotaExceededFault
  | StorageQuotaExceededFault
  | DBSubnetGroupNotFoundFault
  | InvalidVPCNetworkStateFault
  | InvalidDBClusterStateFault
  | InvalidDBSubnetGroupStateFault
  | InvalidSubnet
  | InvalidDBInstanceStateFault
  | DBClusterParameterGroupNotFoundFault
  | KMSKeyNotAccessibleFault
  | DBClusterNotFoundFault
  | DBInstanceNotFoundFault
  | DBSubnetGroupDoesNotCoverEnoughAZs
  | GlobalClusterNotFoundFault
  | InvalidGlobalClusterStateFault;
