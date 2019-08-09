import { _ObjectAttributeRangeList } from "./_ObjectAttributeRangeList";
import { _ObjectReference } from "./_ObjectReference";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _BatchListIndex: _Structure_ = {
  type: "structure",
  required: ["IndexReference"],
  members: {
    RangesOnIndexedValues: {
      shape: _ObjectAttributeRangeList
    },
    IndexReference: {
      shape: _ObjectReference
    },
    MaxResults: {
      shape: {
        type: "integer",
        min: 1
      }
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
