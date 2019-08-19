import { ApplyPendingMaintenanceActionInput } from "../shapes/ApplyPendingMaintenanceActionInput";
import { ApplyPendingMaintenanceActionOutput } from "../shapes/ApplyPendingMaintenanceActionOutput";
import { ResourceNotFoundFault } from "../shapes/ResourceNotFoundFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
    }
  ]
};
