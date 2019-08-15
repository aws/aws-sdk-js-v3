import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteBusinessReportScheduleInput: _Structure_ = {
  type: "structure",
  required: ["ScheduleArn"],
  members: {
    ScheduleArn: {
      shape: {
        type: "string"
      }
    }
  }
};
