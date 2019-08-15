import { _EventTracker } from "./_EventTracker";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeEventTrackerOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    eventTracker: {
      shape: _EventTracker
    }
  }
};
