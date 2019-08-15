import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeAlgorithmInput: _Structure_ = {
  type: "structure",
  required: ["algorithmArn"],
  members: {
    algorithmArn: {
      shape: {
        type: "string"
      }
    }
  }
};
