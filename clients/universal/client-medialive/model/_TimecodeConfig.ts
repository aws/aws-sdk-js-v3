import { Structure as _Structure_ } from "@aws-sdk/types";

export const _TimecodeConfig: _Structure_ = {
  type: "structure",
  required: ["Source"],
  members: {
    Source: {
      shape: {
        type: "string"
      },
      locationName: "source"
    },
    SyncThreshold: {
      shape: {
        type: "integer",
        min: 1
      },
      locationName: "syncThreshold"
    }
  }
};
