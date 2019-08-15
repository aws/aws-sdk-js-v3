import { Structure as _Structure_ } from "@aws-sdk/types";

export const _PendingMaintenanceAction: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Action: {
      shape: {
        type: "string"
      }
    },
    AutoAppliedAfterDate: {
      shape: {
        type: "timestamp"
      }
    },
    ForcedApplyDate: {
      shape: {
        type: "timestamp"
      }
    },
    OptInStatus: {
      shape: {
        type: "string"
      }
    },
    CurrentApplyDate: {
      shape: {
        type: "timestamp"
      }
    },
    Description: {
      shape: {
        type: "string"
      }
    }
  }
};
