import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Scte35SpliceInsertScheduleActionSettings: _Structure_ = {
  type: "structure",
  required: ["SpliceEventId"],
  members: {
    Duration: {
      shape: {
        type: "integer"
      },
      locationName: "duration"
    },
    SpliceEventId: {
      shape: {
        type: "integer"
      },
      locationName: "spliceEventId"
    }
  }
};
