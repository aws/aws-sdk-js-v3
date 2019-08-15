import { _AttributeBooleanValue } from "./_AttributeBooleanValue";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeVpcAttributeOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    VpcId: {
      shape: {
        type: "string"
      },
      locationName: "vpcId"
    },
    EnableDnsHostnames: {
      shape: _AttributeBooleanValue,
      locationName: "enableDnsHostnames"
    },
    EnableDnsSupport: {
      shape: _AttributeBooleanValue,
      locationName: "enableDnsSupport"
    }
  }
};
