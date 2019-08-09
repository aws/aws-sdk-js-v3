import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeIndexOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    indexName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    indexStatus: {
      shape: {
        type: "string"
      }
    },
    schema: {
      shape: {
        type: "string"
      }
    }
  }
};
