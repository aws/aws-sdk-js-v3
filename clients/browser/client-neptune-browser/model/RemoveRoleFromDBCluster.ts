import { RemoveRoleFromDBClusterInput } from "./RemoveRoleFromDBClusterInput";
import { RemoveRoleFromDBClusterOutput } from "./RemoveRoleFromDBClusterOutput";
import { DBClusterNotFoundFault } from "./DBClusterNotFoundFault";
import { DBClusterRoleNotFoundFault } from "./DBClusterRoleNotFoundFault";
import { InvalidDBClusterStateFault } from "./InvalidDBClusterStateFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
