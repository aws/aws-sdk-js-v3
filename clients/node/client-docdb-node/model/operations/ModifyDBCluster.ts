import { ModifyDBClusterInput } from "../shapes/ModifyDBClusterInput";
import { ModifyDBClusterOutput } from "../shapes/ModifyDBClusterOutput";
import { DBClusterNotFoundFault } from "../shapes/DBClusterNotFoundFault";
import { InvalidDBClusterStateFault } from "../shapes/InvalidDBClusterStateFault";
import { StorageQuotaExceededFault } from "../shapes/StorageQuotaExceededFault";
import { DBSubnetGroupNotFoundFault } from "../shapes/DBSubnetGroupNotFoundFault";
import { InvalidVPCNetworkStateFault } from "../shapes/InvalidVPCNetworkStateFault";
import { InvalidDBSubnetGroupStateFault } from "../shapes/InvalidDBSubnetGroupStateFault";
import { InvalidSubnet } from "../shapes/InvalidSubnet";
import { DBClusterParameterGroupNotFoundFault } from "../shapes/DBClusterParameterGroupNotFoundFault";
import { InvalidDBSecurityGroupStateFault } from "../shapes/InvalidDBSecurityGroupStateFault";
import { InvalidDBInstanceStateFault } from "../shapes/InvalidDBInstanceStateFault";
import { DBClusterAlreadyExistsFault } from "../shapes/DBClusterAlreadyExistsFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ModifyDBCluster: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ModifyDBCluster",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ModifyDBClusterInput
  },
  output: {
    shape: ModifyDBClusterOutput,
    resultWrapper: "ModifyDBClusterResult"
  },
  errors: [
    {
      shape: DBClusterNotFoundFault
    },
    {
      shape: InvalidDBClusterStateFault
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
      shape: InvalidDBSubnetGroupStateFault
    },
    {
      shape: InvalidSubnet
    },
    {
      shape: DBClusterParameterGroupNotFoundFault
    },
    {
      shape: InvalidDBSecurityGroupStateFault
    },
    {
      shape: InvalidDBInstanceStateFault
    },
    {
      shape: DBClusterAlreadyExistsFault
    }
  ]
};
