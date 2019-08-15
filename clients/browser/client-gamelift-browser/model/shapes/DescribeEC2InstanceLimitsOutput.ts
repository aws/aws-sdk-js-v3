import { _EC2InstanceLimitList } from "./_EC2InstanceLimitList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeEC2InstanceLimitsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    EC2InstanceLimits: {
      shape: _EC2InstanceLimitList
    }
  }
};
