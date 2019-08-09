import { StartDBClusterInput } from "./StartDBClusterInput";
import { StartDBClusterOutput } from "./StartDBClusterOutput";
import { DBClusterNotFoundFault } from "./DBClusterNotFoundFault";
import { InvalidDBClusterStateFault } from "./InvalidDBClusterStateFault";
import { InvalidDBInstanceStateFault } from "./InvalidDBInstanceStateFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
