import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeStreamInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    StreamName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    StreamARN: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
