import { ModifyDBClusterInput } from "./ModifyDBClusterInput";
import { ModifyDBClusterOutput } from "./ModifyDBClusterOutput";
import { DBClusterNotFoundFault } from "./DBClusterNotFoundFault";
import { InvalidDBClusterStateFault } from "./InvalidDBClusterStateFault";
import { StorageQuotaExceededFault } from "./StorageQuotaExceededFault";
import { DBSubnetGroupNotFoundFault } from "./DBSubnetGroupNotFoundFault";
import { InvalidVPCNetworkStateFault } from "./InvalidVPCNetworkStateFault";
import { InvalidDBSubnetGroupStateFault } from "./InvalidDBSubnetGroupStateFault";
import { InvalidSubnet } from "./InvalidSubnet";
import { DBClusterParameterGroupNotFoundFault } from "./DBClusterParameterGroupNotFoundFault";
import { InvalidDBSecurityGroupStateFault } from "./InvalidDBSecurityGroupStateFault";
import { InvalidDBInstanceStateFault } from "./InvalidDBInstanceStateFault";
import { DBClusterAlreadyExistsFault } from "./DBClusterAlreadyExistsFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
