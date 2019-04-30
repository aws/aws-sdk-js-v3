import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeGlobalTableInput: _Structure_ = {
  type: "structure",
  required: ["GlobalTableName"],
  members: {
    GlobalTableName: {
      shape: {
        type: "string",
        min: 3
      }
    }
  }
};
