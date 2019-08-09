import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Alarm: _Structure_ = {
  type: "structure",
  required: ["AlarmName", "AlarmARN"],
  members: {
    AlarmName: {
      shape: {
        type: "string"
      }
    },
    AlarmARN: {
      shape: {
        type: "string"
      }
    }
  }
};
