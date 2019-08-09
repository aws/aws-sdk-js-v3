import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeregisterTargetFromMaintenanceWindowInput: _Structure_ = {
  type: "structure",
  required: ["WindowId", "WindowTargetId"],
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
    },
    Safe: {
      shape: {
        type: "boolean"
      }
    }
  }
};
