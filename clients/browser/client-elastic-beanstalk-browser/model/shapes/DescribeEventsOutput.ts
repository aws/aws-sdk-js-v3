import { _EventDescriptionList } from "./_EventDescriptionList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeEventsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Events: {
      shape: _EventDescriptionList
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
