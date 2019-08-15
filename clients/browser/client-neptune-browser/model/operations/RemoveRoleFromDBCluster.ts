import { RemoveRoleFromDBClusterInput } from "../shapes/RemoveRoleFromDBClusterInput";
import { RemoveRoleFromDBClusterOutput } from "../shapes/RemoveRoleFromDBClusterOutput";
import { DBClusterNotFoundFault } from "../shapes/DBClusterNotFoundFault";
import { DBClusterRoleNotFoundFault } from "../shapes/DBClusterRoleNotFoundFault";
import { InvalidDBClusterStateFault } from "../shapes/InvalidDBClusterStateFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const RemoveRoleFromDBCluster: _Operation_ = {
  metadata: ServiceMetadata,
  name: "RemoveRoleFromDBCluster",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: RemoveRoleFromDBClusterInput
  },
  output: {
    shape: RemoveRoleFromDBClusterOutput
  },
  errors: [
    {
      shape: DBClusterNotFoundFault
    },
    {
      shape: DBClusterRoleNotFoundFault
    },
    {
      shape: InvalidDBClusterStateFault
    }
  ]
};
