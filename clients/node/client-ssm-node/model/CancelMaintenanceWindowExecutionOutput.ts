import { Structure as _Structure_ } from "@aws-sdk/types";

export const CancelMaintenanceWindowExecutionOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    WindowExecutionId: {
      shape: {
        type: "string",
        min: 36
      }
    }
  }
};
