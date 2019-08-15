import { _ServerEvents } from "./_ServerEvents";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeEventsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ServerEvents: {
      shape: _ServerEvents
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
