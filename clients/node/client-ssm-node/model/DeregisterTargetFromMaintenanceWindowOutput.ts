import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeregisterTargetFromMaintenanceWindowOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    WindowId: {
      shape: {
        type: "string",
        min: 20
      }
    },
    WindowTargetId: {
      shape: {
        type: "string",
        min: 36
      }
    }
  }
};
