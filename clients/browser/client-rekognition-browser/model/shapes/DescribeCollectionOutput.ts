import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeCollectionOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    FaceCount: {
      shape: {
        type: "integer"
      }
    },
    FaceModelVersion: {
      shape: {
        type: "string"
      }
    },
    CollectionARN: {
      shape: {
        type: "string"
      }
    },
    CreationTimestamp: {
      shape: {
        type: "timestamp"
      }
    }
  }
};
