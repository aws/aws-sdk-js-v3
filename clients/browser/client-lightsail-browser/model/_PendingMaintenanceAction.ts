import { Structure as _Structure_ } from "@aws-sdk/types";

export const _PendingMaintenanceAction: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    action: {
      shape: {
        type: "string"
      }
    },
    description: {
      shape: {
        type: "string"
      }
    },
    currentApplyDate: {
      shape: {
        type: "timestamp"
      }
    }
  }
};
