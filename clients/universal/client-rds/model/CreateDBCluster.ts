import { CreateDBClusterInput } from "./CreateDBClusterInput";
import { CreateDBClusterOutput } from "./CreateDBClusterOutput";
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
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CreateDBCluster: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateDBCluster",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateDBClusterInput
  },
  output: {
    shape: CreateDBClusterOutput,
    resultWrapper: "CreateDBClusterResult"
  },
  errors: [
    {
      shape: DBClusterAlreadyExistsFault
    },
    {
      shape: InsufficientStorageClusterCapacityFault
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
      shape: InvalidVPCNetworkStateFault
    },
    {
      shape: InvalidDBClusterStateFault
    },
    {
      shape: InvalidDBSubnetGroupStateFault
    },
    {
      shape: InvalidSubnet
    },
    {
      shape: InvalidDBInstanceStateFault
    },
    {
      shape: DBClusterParameterGroupNotFoundFault
    },
    {
      shape: KMSKeyNotAccessibleFault
    },
    {
      shape: DBClusterNotFoundFault
    },
    {
      shape: DBInstanceNotFoundFault
    },
    {
      shape: DBSubnetGroupDoesNotCoverEnoughAZs
    },
    {
      shape: GlobalClusterNotFoundFault
    },
    {
      shape: InvalidGlobalClusterStateFault
    }
  ]
};
