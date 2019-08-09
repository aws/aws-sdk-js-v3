import { _PendingMaintenanceActionDetails } from "./_PendingMaintenanceActionDetails";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ResourcePendingMaintenanceActions: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ResourceIdentifier: {
      shape: {
        type: "string"
      }
    },
    PendingMaintenanceActionDetails: {
      shape: _PendingMaintenanceActionDetails
    }
  }
};
