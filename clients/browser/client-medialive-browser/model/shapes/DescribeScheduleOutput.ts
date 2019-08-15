import { ___listOfScheduleAction } from "./___listOfScheduleAction";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeScheduleOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    NextToken: {
      shape: {
        type: "string"
      },
      locationName: "nextToken"
    },
    ScheduleActions: {
      shape: ___listOfScheduleAction,
      locationName: "scheduleActions"
    }
  }
};
