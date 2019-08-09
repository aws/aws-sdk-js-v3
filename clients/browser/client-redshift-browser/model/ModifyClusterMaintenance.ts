import { ModifyClusterMaintenanceInput } from "./ModifyClusterMaintenanceInput";
import { ModifyClusterMaintenanceOutput } from "./ModifyClusterMaintenanceOutput";
import { ClusterNotFoundFault } from "./ClusterNotFoundFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ModifyClusterMaintenance: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ModifyClusterMaintenance",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ModifyClusterMaintenanceInput
  },
  output: {
    shape: ModifyClusterMaintenanceOutput,
    resultWrapper: "ModifyClusterMaintenanceResult"
  },
  errors: [
    {
      shape: ClusterNotFoundFault
    }
  ]
};
