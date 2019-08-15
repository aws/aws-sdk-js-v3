import { _BusinessReportScheduleList } from "./_BusinessReportScheduleList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListBusinessReportSchedulesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    BusinessReportSchedules: {
      shape: _BusinessReportScheduleList
    },
    NextToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
