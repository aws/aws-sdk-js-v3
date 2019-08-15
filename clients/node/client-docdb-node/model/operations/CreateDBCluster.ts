import { CreateDBClusterInput } from "../shapes/CreateDBClusterInput";
import { CreateDBClusterOutput } from "../shapes/CreateDBClusterOutput";
import { DBClusterAlreadyExistsFault } from "../shapes/DBClusterAlreadyExistsFault";
import { InsufficientStorageClusterCapacityFault } from "../shapes/InsufficientStorageClusterCapacityFault";
import { DBClusterQuotaExceededFault } from "../shapes/DBClusterQuotaExceededFault";
import { StorageQuotaExceededFault } from "../shapes/StorageQuotaExceededFault";
import { DBSubnetGroupNotFoundFault } from "../shapes/DBSubnetGroupNotFoundFault";
import { InvalidVPCNetworkStateFault } from "../shapes/InvalidVPCNetworkStateFault";
import { InvalidDBClusterStateFault } from "../shapes/InvalidDBClusterStateFault";
import { InvalidDBSubnetGroupStateFault } from "../shapes/InvalidDBSubnetGroupStateFault";
import { InvalidSubnet } from "../shapes/InvalidSubnet";
import { InvalidDBInstanceStateFault } from "../shapes/InvalidDBInstanceStateFault";
import { DBClusterParameterGroupNotFoundFault } from "../shapes/DBClusterParameterGroupNotFoundFault";
import { KMSKeyNotAccessibleFault } from "../shapes/KMSKeyNotAccessibleFault";
import { DBClusterNotFoundFault } from "../shapes/DBClusterNotFoundFault";
import { DBInstanceNotFoundFault } from "../shapes/DBInstanceNotFoundFault";
import { DBSubnetGroupDoesNotCoverEnoughAZs } from "../shapes/DBSubnetGroupDoesNotCoverEnoughAZs";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
    }
  ]
};
