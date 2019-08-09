import { DescribePendingMaintenanceActionsInput } from "./DescribePendingMaintenanceActionsInput";
import { DescribePendingMaintenanceActionsOutput } from "./DescribePendingMaintenanceActionsOutput";
import { ResourceNotFoundFault } from "./ResourceNotFoundFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DescribePendingMaintenanceActions: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribePendingMaintenanceActions",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribePendingMaintenanceActionsInput
  },
  output: {
    shape: DescribePendingMaintenanceActionsOutput
  },
  errors: [
    {
      shape: ResourceNotFoundFault
    }
  ]
};
