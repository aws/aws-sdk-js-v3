import { AddRoleToDBClusterInput } from "./AddRoleToDBClusterInput";
import { AddRoleToDBClusterOutput } from "./AddRoleToDBClusterOutput";
import { DBClusterNotFoundFault } from "./DBClusterNotFoundFault";
import { DBClusterRoleAlreadyExistsFault } from "./DBClusterRoleAlreadyExistsFault";
import { InvalidDBClusterStateFault } from "./InvalidDBClusterStateFault";
import { DBClusterRoleQuotaExceededFault } from "./DBClusterRoleQuotaExceededFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
