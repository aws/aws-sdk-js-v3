import { StartDBClusterInput } from "../shapes/StartDBClusterInput";
import { StartDBClusterOutput } from "../shapes/StartDBClusterOutput";
import { DBClusterNotFoundFault } from "../shapes/DBClusterNotFoundFault";
import { InvalidDBClusterStateFault } from "../shapes/InvalidDBClusterStateFault";
import { InvalidDBInstanceStateFault } from "../shapes/InvalidDBInstanceStateFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const StartDBCluster: _Operation_ = {
  metadata: ServiceMetadata,
  name: "StartDBCluster",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: StartDBClusterInput
  },
  output: {
    shape: StartDBClusterOutput,
    resultWrapper: "StartDBClusterResult"
  },
  errors: [
    {
      shape: DBClusterNotFoundFault
    },
    {
      shape: InvalidDBClusterStateFault
    },
    {
      shape: InvalidDBInstanceStateFault
    }
  ]
};
