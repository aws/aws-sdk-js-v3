import { Structure as _Structure_ } from "@aws-sdk/types";

export const _UpdateFileSystemLustreConfiguration: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    WeeklyMaintenanceStartTime: {
      shape: {
        type: "string",
        min: 7
      }
    }
  }
};
