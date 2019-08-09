import { _StackEvents } from "./_StackEvents";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeStackEventsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    StackEvents: {
      shape: _StackEvents
    },
    NextToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
