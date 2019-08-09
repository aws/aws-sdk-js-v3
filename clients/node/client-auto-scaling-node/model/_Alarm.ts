import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Alarm: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    AlarmName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    AlarmARN: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
