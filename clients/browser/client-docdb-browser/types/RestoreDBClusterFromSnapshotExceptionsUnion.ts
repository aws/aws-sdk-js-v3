import { DBClusterAlreadyExistsFault } from "./DBClusterAlreadyExistsFault";
import { DBClusterQuotaExceededFault } from "./DBClusterQuotaExceededFault";
import { StorageQuotaExceededFault } from "./StorageQuotaExceededFault";
import { DBSubnetGroupNotFoundFault } from "./DBSubnetGroupNotFoundFault";
import { DBSnapshotNotFoundFault } from "./DBSnapshotNotFoundFault";
import { DBClusterSnapshotNotFoundFault } from "./DBClusterSnapshotNotFoundFault";
import { InsufficientDBClusterCapacityFault } from "./InsufficientDBClusterCapacityFault";
import { InsufficientStorageClusterCapacityFault } from "./InsufficientStorageClusterCapacityFault";
import { InvalidDBSnapshotStateFault } from "./InvalidDBSnapshotStateFault";
import { InvalidDBClusterSnapshotStateFault } from "./InvalidDBClusterSnapshotStateFault";
import { InvalidVPCNetworkStateFault } from "./InvalidVPCNetworkStateFault";
import { InvalidRestoreFault } from "./InvalidRestoreFault";
import { InvalidSubnet } from "./InvalidSubnet";
import { KMSKeyNotAccessibleFault } from "./KMSKeyNotAccessibleFault";
export type RestoreDBClusterFromSnapshotExceptionsUnion =
  | DBClusterAlreadyExistsFault
  | DBClusterQuotaExceededFault
  | StorageQuotaExceededFault
  | DBSubnetGroupNotFoundFault
  | DBSnapshotNotFoundFault
  | DBClusterSnapshotNotFoundFault
  | InsufficientDBClusterCapacityFault
  | InsufficientStorageClusterCapacityFault
  | InvalidDBSnapshotStateFault
  | InvalidDBClusterSnapshotStateFault
  | InvalidVPCNetworkStateFault
  | InvalidRestoreFault
  | InvalidSubnet
  | KMSKeyNotAccessibleFault;
