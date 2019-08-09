import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteMaintenanceWindowOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    WindowId: {
      shape: {
        type: "string",
        min: 20
      }
    }
  }
};
