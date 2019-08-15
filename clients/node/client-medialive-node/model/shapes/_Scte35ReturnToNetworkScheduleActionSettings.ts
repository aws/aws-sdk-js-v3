import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Scte35ReturnToNetworkScheduleActionSettings: _Structure_ = {
  type: "structure",
  required: ["SpliceEventId"],
  members: {
    SpliceEventId: {
      shape: {
        type: "integer"
      },
      locationName: "spliceEventId"
    }
  }
};
