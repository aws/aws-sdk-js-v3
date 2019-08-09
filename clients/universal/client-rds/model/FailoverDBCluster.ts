import { FailoverDBClusterInput } from "./FailoverDBClusterInput";
import { FailoverDBClusterOutput } from "./FailoverDBClusterOutput";
import { DBClusterNotFoundFault } from "./DBClusterNotFoundFault";
import { InvalidDBClusterStateFault } from "./InvalidDBClusterStateFault";
import { InvalidDBInstanceStateFault } from "./InvalidDBInstanceStateFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const FailoverDBCluster: _Operation_ = {
  metadata: ServiceMetadata,
  name: "FailoverDBCluster",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: FailoverDBClusterInput
  },
  output: {
    shape: FailoverDBClusterOutput,
    resultWrapper: "FailoverDBClusterResult"
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
