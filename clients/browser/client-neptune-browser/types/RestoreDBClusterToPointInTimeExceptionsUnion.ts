import { DBClusterAlreadyExistsFault } from "./DBClusterAlreadyExistsFault";
import { DBClusterNotFoundFault } from "./DBClusterNotFoundFault";
import { DBClusterQuotaExceededFault } from "./DBClusterQuotaExceededFault";
import { DBClusterSnapshotNotFoundFault } from "./DBClusterSnapshotNotFoundFault";
import { DBSubnetGroupNotFoundFault } from "./DBSubnetGroupNotFoundFault";
import { InsufficientDBClusterCapacityFault } from "./InsufficientDBClusterCapacityFault";
import { InsufficientStorageClusterCapacityFault } from "./InsufficientStorageClusterCapacityFault";
import { InvalidDBClusterSnapshotStateFault } from "./InvalidDBClusterSnapshotStateFault";
import { InvalidDBClusterStateFault } from "./InvalidDBClusterStateFault";
import { InvalidDBSnapshotStateFault } from "./InvalidDBSnapshotStateFault";
import { InvalidRestoreFault } from "./InvalidRestoreFault";
import { InvalidSubnet } from "./InvalidSubnet";
import { InvalidVPCNetworkStateFault } from "./InvalidVPCNetworkStateFault";
import { KMSKeyNotAccessibleFault } from "./KMSKeyNotAccessibleFault";
import { OptionGroupNotFoundFault } from "./OptionGroupNotFoundFault";
import { StorageQuotaExceededFault } from "./StorageQuotaExceededFault";
import { DBClusterParameterGroupNotFoundFault } from "./DBClusterParameterGroupNotFoundFault";
export type RestoreDBClusterToPointInTimeExceptionsUnion =
  | DBClusterAlreadyExistsFault
  | DBClusterNotFoundFault
  | DBClusterQuotaExceededFault
  | DBClusterSnapshotNotFoundFault
  | DBSubnetGroupNotFoundFault
  | InsufficientDBClusterCapacityFault
  | InsufficientStorageClusterCapacityFault
  | InvalidDBClusterSnapshotStateFault
  | InvalidDBClusterStateFault
  | InvalidDBSnapshotStateFault
  | InvalidRestoreFault
  | InvalidSubnet
  | InvalidVPCNetworkStateFault
  | KMSKeyNotAccessibleFault
  | OptionGroupNotFoundFault
  | StorageQuotaExceededFault
  | DBClusterParameterGroupNotFoundFault;
