import { _Strings } from "./_Strings";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeTimeBasedAutoScalingInput: _Structure_ = {
  type: "structure",
  required: ["InstanceIds"],
  members: {
    InstanceIds: {
      shape: _Strings
    }
  }
};
