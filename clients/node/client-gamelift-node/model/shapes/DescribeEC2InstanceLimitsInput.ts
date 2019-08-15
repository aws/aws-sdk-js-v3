import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeEC2InstanceLimitsInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    EC2InstanceType: {
      shape: {
        type: "string"
      }
    }
  }
};
