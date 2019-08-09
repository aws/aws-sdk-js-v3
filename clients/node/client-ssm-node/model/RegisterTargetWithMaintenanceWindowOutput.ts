import { Structure as _Structure_ } from "@aws-sdk/types";

export const RegisterTargetWithMaintenanceWindowOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    WindowTargetId: {
      shape: {
        type: "string",
        min: 36
      }
    }
  }
};
