import { StartDBInstanceInput } from "./StartDBInstanceInput";
import { StartDBInstanceOutput } from "./StartDBInstanceOutput";
import { DBInstanceNotFoundFault } from "./DBInstanceNotFoundFault";
import { InvalidDBInstanceStateFault } from "./InvalidDBInstanceStateFault";
import { InsufficientDBInstanceCapacityFault } from "./InsufficientDBInstanceCapacityFault";
import { DBSubnetGroupNotFoundFault } from "./DBSubnetGroupNotFoundFault";
import { DBSubnetGroupDoesNotCoverEnoughAZs } from "./DBSubnetGroupDoesNotCoverEnoughAZs";
import { InvalidDBClusterStateFault } from "./InvalidDBClusterStateFault";
import { InvalidSubnet } from "./InvalidSubnet";
import { InvalidVPCNetworkStateFault } from "./InvalidVPCNetworkStateFault";
import { DBClusterNotFoundFault } from "./DBClusterNotFoundFault";
import { AuthorizationNotFoundFault } from "./AuthorizationNotFoundFault";
import { KMSKeyNotAccessibleFault } from "./KMSKeyNotAccessibleFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const StartDBInstance: _Operation_ = {
  metadata: ServiceMetadata,
  name: "StartDBInstance",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: StartDBInstanceInput
  },
  output: {
    shape: StartDBInstanceOutput,
    resultWrapper: "StartDBInstanceResult"
  },
  errors: [
    {
      shape: DBInstanceNotFoundFault
    },
    {
      shape: InvalidDBInstanceStateFault
    },
    {
      shape: InsufficientDBInstanceCapacityFault
    },
    {
      shape: DBSubnetGroupNotFoundFault
    },
    {
      shape: DBSubnetGroupDoesNotCoverEnoughAZs
    },
    {
      shape: InvalidDBClusterStateFault
    },
    {
      shape: InvalidSubnet
    },
    {
      shape: InvalidVPCNetworkStateFault
    },
    {
      shape: DBClusterNotFoundFault
    },
    {
      shape: AuthorizationNotFoundFault
    },
    {
      shape: KMSKeyNotAccessibleFault
    }
  ]
};
