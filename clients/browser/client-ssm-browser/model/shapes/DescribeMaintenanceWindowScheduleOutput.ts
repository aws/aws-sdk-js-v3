import { _ScheduledWindowExecutionList } from "./_ScheduledWindowExecutionList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeMaintenanceWindowScheduleOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ScheduledWindowExecutions: {
      shape: _ScheduledWindowExecutionList
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
