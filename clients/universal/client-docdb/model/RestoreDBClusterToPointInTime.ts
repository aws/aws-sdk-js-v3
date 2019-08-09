import { RestoreDBClusterToPointInTimeInput } from "./RestoreDBClusterToPointInTimeInput";
import { RestoreDBClusterToPointInTimeOutput } from "./RestoreDBClusterToPointInTimeOutput";
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
import { StorageQuotaExceededFault } from "./StorageQuotaExceededFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const RestoreDBClusterToPointInTime: _Operation_ = {
  metadata: ServiceMetadata,
  name: "RestoreDBClusterToPointInTime",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: RestoreDBClusterToPointInTimeInput
  },
  output: {
    shape: RestoreDBClusterToPointInTimeOutput,
    resultWrapper: "RestoreDBClusterToPointInTimeResult"
  },
  errors: [
    {
      shape: DBClusterAlreadyExistsFault
    },
    {
      shape: DBClusterNotFoundFault
    },
    {
      shape: DBClusterQuotaExceededFault
    },
    {
      shape: DBClusterSnapshotNotFoundFault
    },
    {
      shape: DBSubnetGroupNotFoundFault
    },
    {
      shape: InsufficientDBClusterCapacityFault
    },
    {
      shape: InsufficientStorageClusterCapacityFault
    },
    {
      shape: InvalidDBClusterSnapshotStateFault
    },
    {
      shape: InvalidDBClusterStateFault
    },
    {
      shape: InvalidDBSnapshotStateFault
    },
    {
      shape: InvalidRestoreFault
    },
    {
      shape: InvalidSubnet
    },
    {
      shape: InvalidVPCNetworkStateFault
    },
    {
      shape: KMSKeyNotAccessibleFault
    },
    {
      shape: StorageQuotaExceededFault
    }
  ]
};
