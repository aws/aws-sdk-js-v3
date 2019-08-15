import { _EventTypeList } from "./_EventTypeList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeEventTypesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    eventTypes: {
      shape: _EventTypeList
    },
    nextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
