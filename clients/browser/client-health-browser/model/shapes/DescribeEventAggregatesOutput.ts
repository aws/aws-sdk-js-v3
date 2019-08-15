import { _EventAggregateList } from "./_EventAggregateList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeEventAggregatesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    eventAggregates: {
      shape: _EventAggregateList
    },
    nextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
