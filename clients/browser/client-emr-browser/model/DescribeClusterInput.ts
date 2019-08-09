import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeClusterInput: _Structure_ = {
  type: "structure",
  required: ["ClusterId"],
  members: {
    ClusterId: {
      shape: {
        type: "string"
      }
    }
  }
};
