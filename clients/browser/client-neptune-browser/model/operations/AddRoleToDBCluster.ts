import { AddRoleToDBClusterInput } from "../shapes/AddRoleToDBClusterInput";
import { AddRoleToDBClusterOutput } from "../shapes/AddRoleToDBClusterOutput";
import { DBClusterNotFoundFault } from "../shapes/DBClusterNotFoundFault";
import { DBClusterRoleAlreadyExistsFault } from "../shapes/DBClusterRoleAlreadyExistsFault";
import { InvalidDBClusterStateFault } from "../shapes/InvalidDBClusterStateFault";
import { DBClusterRoleQuotaExceededFault } from "../shapes/DBClusterRoleQuotaExceededFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const AddRoleToDBCluster: _Operation_ = {
  metadata: ServiceMetadata,
  name: "AddRoleToDBCluster",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: AddRoleToDBClusterInput
  },
  output: {
    shape: AddRoleToDBClusterOutput
  },
  errors: [
    {
      shape: DBClusterNotFoundFault
    },
    {
      shape: DBClusterRoleAlreadyExistsFault
    },
    {
      shape: InvalidDBClusterStateFault
    },
    {
      shape: DBClusterRoleQuotaExceededFault
    }
  ]
};
