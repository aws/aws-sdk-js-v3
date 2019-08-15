import { FailoverDBClusterInput } from "../shapes/FailoverDBClusterInput";
import { FailoverDBClusterOutput } from "../shapes/FailoverDBClusterOutput";
import { DBClusterNotFoundFault } from "../shapes/DBClusterNotFoundFault";
import { InvalidDBClusterStateFault } from "../shapes/InvalidDBClusterStateFault";
import { InvalidDBInstanceStateFault } from "../shapes/InvalidDBInstanceStateFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
