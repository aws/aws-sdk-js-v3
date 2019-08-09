import { _MetricAlarms } from "./_MetricAlarms";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeAlarmsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    MetricAlarms: {
      shape: _MetricAlarms
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
