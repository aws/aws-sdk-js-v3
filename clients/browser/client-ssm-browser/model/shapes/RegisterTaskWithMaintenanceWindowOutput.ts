import { Structure as _Structure_ } from "@aws-sdk/types";

export const RegisterTaskWithMaintenanceWindowOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    WindowTaskId: {
      shape: {
        type: "string",
        min: 36
      }
    }
  }
};
