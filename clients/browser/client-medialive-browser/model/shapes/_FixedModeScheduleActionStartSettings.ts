import { Structure as _Structure_ } from "@aws-sdk/types";

export const _FixedModeScheduleActionStartSettings: _Structure_ = {
  type: "structure",
  required: ["Time"],
  members: {
    Time: {
      shape: {
        type: "string"
      },
      locationName: "time"
    }
  }
};
