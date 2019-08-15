import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetMaintenanceWindowTaskInput: _Structure_ = {
  type: "structure",
  required: ["WindowId", "WindowTaskId"],
  members: {
    WindowId: {
      shape: {
        type: "string",
        min: 20
      }
    },
    WindowTaskId: {
      shape: {
        type: "string",
        min: 36
      }
    }
  }
};
