import { Structure as _Structure_ } from "@aws-sdk/types";

export const _DeferredMaintenanceWindow: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    DeferMaintenanceIdentifier: {
      shape: {
        type: "string"
      }
    },
    DeferMaintenanceStartTime: {
      shape: {
        type: "timestamp"
      }
    },
    DeferMaintenanceEndTime: {
      shape: {
        type: "timestamp"
      }
    }
  }
};
