import { _ScheduledUpdateGroupActions } from "./_ScheduledUpdateGroupActions";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeScheduledActionsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ScheduledUpdateGroupActions: {
      shape: _ScheduledUpdateGroupActions
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
