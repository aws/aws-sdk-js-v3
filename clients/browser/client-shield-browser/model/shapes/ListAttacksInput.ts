import { _ResourceArnFilterList } from "./_ResourceArnFilterList";
import { _TimeRange } from "./_TimeRange";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListAttacksInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ResourceArns: {
      shape: _ResourceArnFilterList
    },
    StartTime: {
      shape: _TimeRange
    },
    EndTime: {
      shape: _TimeRange
    },
    NextToken: {
      shape: {
        type: "string",
        min: 1
      }
    },
    MaxResults: {
      shape: {
        type: "integer"
      }
    }
  }
};
