import { DBClusterAlreadyExistsFault } from "./DBClusterAlreadyExistsFault";
import { DBClusterQuotaExceededFault } from "./DBClusterQuotaExceededFault";
import { StorageQuotaExceededFault } from "./StorageQuotaExceededFault";
import { DBSubnetGroupNotFoundFault } from "./DBSubnetGroupNotFoundFault";
import { InvalidVPCNetworkStateFault } from "./InvalidVPCNetworkStateFault";
import { InvalidDBClusterStateFault } from "./InvalidDBClusterStateFault";
import { InvalidDBSubnetGroupStateFault } from "./InvalidDBSubnetGroupStateFault";
import { InvalidSubnet } from "./InvalidSubnet";
import { InvalidS3BucketFault } from "./InvalidS3BucketFault";
import { DBClusterParameterGroupNotFoundFault } from "./DBClusterParameterGroupNotFoundFault";
import { KMSKeyNotAccessibleFault } from "./KMSKeyNotAccessibleFault";
import { DBClusterNotFoundFault } from "./DBClusterNotFoundFault";
import { InsufficientStorageClusterCapacityFault } from "./InsufficientStorageClusterCapacityFault";
export type RestoreDBClusterFromS3ExceptionsUnion =
  | DBClusterAlreadyExistsFault
  | DBClusterQuotaExceededFault
  | StorageQuotaExceededFault
  | DBSubnetGroupNotFoundFault
  | InvalidVPCNetworkStateFault
  | InvalidDBClusterStateFault
  | InvalidDBSubnetGroupStateFault
  | InvalidSubnet
  | InvalidS3BucketFault
  | DBClusterParameterGroupNotFoundFault
  | KMSKeyNotAccessibleFault
  | DBClusterNotFoundFault
  | InsufficientStorageClusterCapacityFault;
