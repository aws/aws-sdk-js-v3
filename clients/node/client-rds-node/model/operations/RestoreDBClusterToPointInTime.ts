import { RestoreDBClusterToPointInTimeInput } from "../shapes/RestoreDBClusterToPointInTimeInput";
import { RestoreDBClusterToPointInTimeOutput } from "../shapes/RestoreDBClusterToPointInTimeOutput";
import { DBClusterAlreadyExistsFault } from "../shapes/DBClusterAlreadyExistsFault";
import { DBClusterNotFoundFault } from "../shapes/DBClusterNotFoundFault";
import { DBClusterQuotaExceededFault } from "../shapes/DBClusterQuotaExceededFault";
import { DBClusterSnapshotNotFoundFault } from "../shapes/DBClusterSnapshotNotFoundFault";
import { DBSubnetGroupNotFoundFault } from "../shapes/DBSubnetGroupNotFoundFault";
import { InsufficientDBClusterCapacityFault } from "../shapes/InsufficientDBClusterCapacityFault";
import { InsufficientStorageClusterCapacityFault } from "../shapes/InsufficientStorageClusterCapacityFault";
import { InvalidDBClusterSnapshotStateFault } from "../shapes/InvalidDBClusterSnapshotStateFault";
import { InvalidDBClusterStateFault } from "../shapes/InvalidDBClusterStateFault";
import { InvalidDBSnapshotStateFault } from "../shapes/InvalidDBSnapshotStateFault";
import { InvalidRestoreFault } from "../shapes/InvalidRestoreFault";
import { InvalidSubnet } from "../shapes/InvalidSubnet";
import { InvalidVPCNetworkStateFault } from "../shapes/InvalidVPCNetworkStateFault";
import { KMSKeyNotAccessibleFault } from "../shapes/KMSKeyNotAccessibleFault";
import { OptionGroupNotFoundFault } from "../shapes/OptionGroupNotFoundFault";
import { StorageQuotaExceededFault } from "../shapes/StorageQuotaExceededFault";
import { DBClusterParameterGroupNotFoundFault } from "../shapes/DBClusterParameterGroupNotFoundFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
      shape: OptionGroupNotFoundFault
    },
    {
      shape: StorageQuotaExceededFault
    },
    {
      shape: DBClusterParameterGroupNotFoundFault
    }
  ]
};
