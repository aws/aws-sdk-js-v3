import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeAcceleratorInput: _Structure_ = {
  type: "structure",
  required: ["AcceleratorArn"],
  members: {
    AcceleratorArn: {
      shape: {
        type: "string"
      }
    }
  }
};
