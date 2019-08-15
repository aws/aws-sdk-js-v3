import { _PendingMaintenanceActions } from "./_PendingMaintenanceActions";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribePendingMaintenanceActionsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    PendingMaintenanceActions: {
      shape: _PendingMaintenanceActions
    },
    Marker: {
      shape: {
        type: "string"
      }
    }
  }
};
