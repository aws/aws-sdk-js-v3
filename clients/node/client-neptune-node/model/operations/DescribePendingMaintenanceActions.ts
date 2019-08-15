import { DescribePendingMaintenanceActionsInput } from "../shapes/DescribePendingMaintenanceActionsInput";
import { DescribePendingMaintenanceActionsOutput } from "../shapes/DescribePendingMaintenanceActionsOutput";
import { ResourceNotFoundFault } from "../shapes/ResourceNotFoundFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
    shape: DescribePendingMaintenanceActionsOutput,
    resultWrapper: "DescribePendingMaintenanceActionsResult"
  },
  errors: [
    {
      shape: ResourceNotFoundFault
    }
  ]
};
