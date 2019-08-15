import { ModifyClusterMaintenanceInput } from "../shapes/ModifyClusterMaintenanceInput";
import { ModifyClusterMaintenanceOutput } from "../shapes/ModifyClusterMaintenanceOutput";
import { ClusterNotFoundFault } from "../shapes/ClusterNotFoundFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
