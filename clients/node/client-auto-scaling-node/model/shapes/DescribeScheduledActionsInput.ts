import { _ScheduledActionNames } from "./_ScheduledActionNames";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeScheduledActionsInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    AutoScalingGroupName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ScheduledActionNames: {
      shape: _ScheduledActionNames
    },
    StartTime: {
      shape: {
        type: "timestamp"
      }
    },
    EndTime: {
      shape: {
        type: "timestamp"
      }
    },
    NextToken: {
      shape: {
        type: "string"
      }
    },
    MaxRecords: {
      shape: {
        type: "integer"
      }
    }
  }
};
