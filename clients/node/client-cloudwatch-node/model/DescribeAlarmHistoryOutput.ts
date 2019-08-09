import { _AlarmHistoryItems } from "./_AlarmHistoryItems";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeAlarmHistoryOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    AlarmHistoryItems: {
      shape: _AlarmHistoryItems
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
