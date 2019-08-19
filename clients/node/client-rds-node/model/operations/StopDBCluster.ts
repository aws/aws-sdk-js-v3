import { StopDBClusterInput } from "../shapes/StopDBClusterInput";
import { StopDBClusterOutput } from "../shapes/StopDBClusterOutput";
import { DBClusterNotFoundFault } from "../shapes/DBClusterNotFoundFault";
import { InvalidDBClusterStateFault } from "../shapes/InvalidDBClusterStateFault";
import { InvalidDBInstanceStateFault } from "../shapes/InvalidDBInstanceStateFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const StopDBCluster: _Operation_ = {
  metadata: ServiceMetadata,
  name: "StopDBCluster",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: StopDBClusterInput
  },
  output: {
    shape: StopDBClusterOutput,
    resultWrapper: "StopDBClusterResult"
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
