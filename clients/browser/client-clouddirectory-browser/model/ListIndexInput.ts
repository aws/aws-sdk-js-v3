import { _ObjectAttributeRangeList } from "./_ObjectAttributeRangeList";
import { _ObjectReference } from "./_ObjectReference";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListIndexInput: _Structure_ = {
  type: "structure",
  required: ["DirectoryArn", "IndexReference"],
  members: {
    DirectoryArn: {
      shape: {
        type: "string"
      },
      location: "header",
      locationName: "x-amz-data-partition"
    },
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
    },
    ConsistencyLevel: {
      shape: {
        type: "string"
      },
      location: "header",
      locationName: "x-amz-consistency-level"
    }
  }
};
