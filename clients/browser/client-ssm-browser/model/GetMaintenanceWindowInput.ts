import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetMaintenanceWindowInput: _Structure_ = {
  type: "structure",
  required: ["WindowId"],
  members: {
    WindowId: {
      shape: {
        type: "string",
        min: 20
      }
    }
  }
};
