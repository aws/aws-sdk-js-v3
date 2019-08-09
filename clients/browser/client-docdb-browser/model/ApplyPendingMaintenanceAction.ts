import { ApplyPendingMaintenanceActionInput } from "./ApplyPendingMaintenanceActionInput";
import { ApplyPendingMaintenanceActionOutput } from "./ApplyPendingMaintenanceActionOutput";
import { ResourceNotFoundFault } from "./ResourceNotFoundFault";
import { InvalidDBClusterStateFault } from "./InvalidDBClusterStateFault";
import { InvalidDBInstanceStateFault } from "./InvalidDBInstanceStateFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ApplyPendingMaintenanceAction: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ApplyPendingMaintenanceAction",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ApplyPendingMaintenanceActionInput
  },
  output: {
    shape: ApplyPendingMaintenanceActionOutput,
    resultWrapper: "ApplyPendingMaintenanceActionResult"
  },
  errors: [
    {
      shape: ResourceNotFoundFault
    },
    {
      shape: InvalidDBClusterStateFault
    },
    {
      shape: InvalidDBInstanceStateFault
    }
  ]
};
