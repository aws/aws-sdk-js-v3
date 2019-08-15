import { _ScheduledActions } from "./_ScheduledActions";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeScheduledActionsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ScheduledActions: {
      shape: _ScheduledActions
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
