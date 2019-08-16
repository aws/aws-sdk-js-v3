import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeStreamSummaryInput: _Structure_ = {
  type: "structure",
  required: ["StreamName"],
  members: {
    StreamName: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
