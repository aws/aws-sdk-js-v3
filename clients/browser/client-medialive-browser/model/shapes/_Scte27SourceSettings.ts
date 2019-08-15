import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Scte27SourceSettings: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Pid: {
      shape: {
        type: "integer",
        min: 1
      },
      locationName: "pid"
    }
  }
};
