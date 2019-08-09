import { _ResourcePendingMaintenanceActions } from "./_ResourcePendingMaintenanceActions";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ApplyPendingMaintenanceActionOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ResourcePendingMaintenanceActions: {
      shape: _ResourcePendingMaintenanceActions
    }
  }
};
