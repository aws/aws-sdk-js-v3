import { _EventList } from "./_EventList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeFleetEventsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Events: {
      shape: _EventList
    },
    NextToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
