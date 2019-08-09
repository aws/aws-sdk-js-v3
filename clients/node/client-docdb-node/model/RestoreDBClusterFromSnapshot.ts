import { RestoreDBClusterFromSnapshotInput } from "./RestoreDBClusterFromSnapshotInput";
import { RestoreDBClusterFromSnapshotOutput } from "./RestoreDBClusterFromSnapshotOutput";
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
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const RestoreDBClusterFromSnapshot: _Operation_ = {
  metadata: ServiceMetadata,
  name: "RestoreDBClusterFromSnapshot",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: RestoreDBClusterFromSnapshotInput
  },
  output: {
    shape: RestoreDBClusterFromSnapshotOutput,
    resultWrapper: "RestoreDBClusterFromSnapshotResult"
  },
  errors: [
    {
      shape: DBClusterAlreadyExistsFault
    },
    {
      shape: DBClusterQuotaExceededFault
    },
    {
      shape: StorageQuotaExceededFault
    },
    {
      shape: DBSubnetGroupNotFoundFault
    },
    {
      shape: DBSnapshotNotFoundFault
    },
    {
      shape: DBClusterSnapshotNotFoundFault
    },
    {
      shape: InsufficientDBClusterCapacityFault
    },
    {
      shape: InsufficientStorageClusterCapacityFault
    },
    {
      shape: InvalidDBSnapshotStateFault
    },
    {
      shape: InvalidDBClusterSnapshotStateFault
    },
    {
      shape: StorageQuotaExceededFault
    },
    {
      shape: InvalidVPCNetworkStateFault
    },
    {
      shape: InvalidRestoreFault
    },
    {
      shape: DBSubnetGroupNotFoundFault
    },
    {
      shape: InvalidSubnet
    },
    {
      shape: KMSKeyNotAccessibleFault
    }
  ]
};
