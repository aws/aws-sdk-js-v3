import { RestoreDBClusterFromSnapshotInput } from "../shapes/RestoreDBClusterFromSnapshotInput";
import { RestoreDBClusterFromSnapshotOutput } from "../shapes/RestoreDBClusterFromSnapshotOutput";
import { DBClusterAlreadyExistsFault } from "../shapes/DBClusterAlreadyExistsFault";
import { DBClusterQuotaExceededFault } from "../shapes/DBClusterQuotaExceededFault";
import { StorageQuotaExceededFault } from "../shapes/StorageQuotaExceededFault";
import { DBSubnetGroupNotFoundFault } from "../shapes/DBSubnetGroupNotFoundFault";
import { DBSnapshotNotFoundFault } from "../shapes/DBSnapshotNotFoundFault";
import { DBClusterSnapshotNotFoundFault } from "../shapes/DBClusterSnapshotNotFoundFault";
import { InsufficientDBClusterCapacityFault } from "../shapes/InsufficientDBClusterCapacityFault";
import { InsufficientStorageClusterCapacityFault } from "../shapes/InsufficientStorageClusterCapacityFault";
import { InvalidDBSnapshotStateFault } from "../shapes/InvalidDBSnapshotStateFault";
import { InvalidDBClusterSnapshotStateFault } from "../shapes/InvalidDBClusterSnapshotStateFault";
import { InvalidVPCNetworkStateFault } from "../shapes/InvalidVPCNetworkStateFault";
import { InvalidRestoreFault } from "../shapes/InvalidRestoreFault";
import { InvalidSubnet } from "../shapes/InvalidSubnet";
import { OptionGroupNotFoundFault } from "../shapes/OptionGroupNotFoundFault";
import { KMSKeyNotAccessibleFault } from "../shapes/KMSKeyNotAccessibleFault";
import { DBClusterParameterGroupNotFoundFault } from "../shapes/DBClusterParameterGroupNotFoundFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
      shape: OptionGroupNotFoundFault
    },
    {
      shape: KMSKeyNotAccessibleFault
    },
    {
      shape: DBClusterParameterGroupNotFoundFault
    }
  ]
};
