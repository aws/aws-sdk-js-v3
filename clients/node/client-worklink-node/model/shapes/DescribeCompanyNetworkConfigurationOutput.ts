import { _SubnetIds } from "./_SubnetIds";
import { _SecurityGroupIds } from "./_SecurityGroupIds";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeCompanyNetworkConfigurationOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    VpcId: {
      shape: {
        type: "string"
      }
    },
    SubnetIds: {
      shape: _SubnetIds
    },
    SecurityGroupIds: {
      shape: _SecurityGroupIds
    }
  }
};
