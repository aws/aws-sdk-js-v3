import { _EventList } from "./_EventList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeEventsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Marker: {
      shape: {
        type: "string"
      }
    },
    Events: {
      shape: _EventList
    }
  }
};
