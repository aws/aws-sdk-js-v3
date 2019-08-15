import { StartDBInstanceInput } from "../shapes/StartDBInstanceInput";
import { StartDBInstanceOutput } from "../shapes/StartDBInstanceOutput";
import { DBInstanceNotFoundFault } from "../shapes/DBInstanceNotFoundFault";
import { InvalidDBInstanceStateFault } from "../shapes/InvalidDBInstanceStateFault";
import { InsufficientDBInstanceCapacityFault } from "../shapes/InsufficientDBInstanceCapacityFault";
import { DBSubnetGroupNotFoundFault } from "../shapes/DBSubnetGroupNotFoundFault";
import { DBSubnetGroupDoesNotCoverEnoughAZs } from "../shapes/DBSubnetGroupDoesNotCoverEnoughAZs";
import { InvalidDBClusterStateFault } from "../shapes/InvalidDBClusterStateFault";
import { InvalidSubnet } from "../shapes/InvalidSubnet";
import { InvalidVPCNetworkStateFault } from "../shapes/InvalidVPCNetworkStateFault";
import { DBClusterNotFoundFault } from "../shapes/DBClusterNotFoundFault";
import { AuthorizationNotFoundFault } from "../shapes/AuthorizationNotFoundFault";
import { KMSKeyNotAccessibleFault } from "../shapes/KMSKeyNotAccessibleFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
