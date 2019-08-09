import { StopDBClusterInput } from "./StopDBClusterInput";
import { StopDBClusterOutput } from "./StopDBClusterOutput";
import { DBClusterNotFoundFault } from "./DBClusterNotFoundFault";
import { InvalidDBClusterStateFault } from "./InvalidDBClusterStateFault";
import { InvalidDBInstanceStateFault } from "./InvalidDBInstanceStateFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
