import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeProjectInput: _Structure_ = {
  type: "structure",
  required: ["id"],
  members: {
    id: {
      shape: {
        type: "string",
        min: 2
      }
    }
  }
};
