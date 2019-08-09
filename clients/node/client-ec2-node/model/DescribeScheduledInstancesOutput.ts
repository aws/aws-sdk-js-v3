import { _ScheduledInstanceSet } from "./_ScheduledInstanceSet";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeScheduledInstancesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    NextToken: {
      shape: {
        type: "string"
      },
      locationName: "nextToken"
    },
    ScheduledInstanceSet: {
      shape: _ScheduledInstanceSet,
      locationName: "scheduledInstanceSet"
    }
  }
};
