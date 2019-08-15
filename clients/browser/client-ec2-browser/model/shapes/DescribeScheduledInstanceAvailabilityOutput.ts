import { _ScheduledInstanceAvailabilitySet } from "./_ScheduledInstanceAvailabilitySet";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeScheduledInstanceAvailabilityOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    NextToken: {
      shape: {
        type: "string"
      },
      locationName: "nextToken"
    },
    ScheduledInstanceAvailabilitySet: {
      shape: _ScheduledInstanceAvailabilitySet,
      locationName: "scheduledInstanceAvailabilitySet"
    }
  }
};
