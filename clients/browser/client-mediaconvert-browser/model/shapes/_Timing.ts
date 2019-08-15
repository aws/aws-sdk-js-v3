import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Timing: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    FinishTime: {
      shape: {
        type: "timestamp",
        timestampFormat: "unixTimestamp"
      },
      locationName: "finishTime"
    },
    StartTime: {
      shape: {
        type: "timestamp",
        timestampFormat: "unixTimestamp"
      },
      locationName: "startTime"
    },
    SubmitTime: {
      shape: {
        type: "timestamp",
        timestampFormat: "unixTimestamp"
      },
      locationName: "submitTime"
    }
  }
};
