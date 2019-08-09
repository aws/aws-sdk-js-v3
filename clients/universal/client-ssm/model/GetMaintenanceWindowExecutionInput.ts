import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetMaintenanceWindowExecutionInput: _Structure_ = {
  type: "structure",
  required: ["WindowExecutionId"],
  members: {
    WindowExecutionId: {
      shape: {
        type: "string",
        min: 36
      }
    }
  }
};
