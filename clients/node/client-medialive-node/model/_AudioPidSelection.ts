import { Structure as _Structure_ } from "@aws-sdk/types";

export const _AudioPidSelection: _Structure_ = {
  type: "structure",
  required: ["Pid"],
  members: {
    Pid: {
      shape: {
        type: "integer"
      },
      locationName: "pid"
    }
  }
};
