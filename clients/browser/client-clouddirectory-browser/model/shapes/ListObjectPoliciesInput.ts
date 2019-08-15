import { _ObjectReference } from "./_ObjectReference";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListObjectPoliciesInput: _Structure_ = {
  type: "structure",
  required: ["DirectoryArn", "ObjectReference"],
  members: {
    DirectoryArn: {
      shape: {
        type: "string"
      },
      location: "header",
      locationName: "x-amz-data-partition"
    },
    ObjectReference: {
      shape: _ObjectReference
    },
    NextToken: {
      shape: {
        type: "string"
      }
    },
    MaxResults: {
      shape: {
        type: "integer",
        min: 1
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
