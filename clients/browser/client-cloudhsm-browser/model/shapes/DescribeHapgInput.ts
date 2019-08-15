import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeHapgInput: _Structure_ = {
  type: "structure",
  required: ["HapgArn"],
  members: {
    HapgArn: {
      shape: {
        type: "string"
      }
    }
  }
};
