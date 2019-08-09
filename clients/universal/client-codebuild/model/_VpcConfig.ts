import { _Subnets } from "./_Subnets";
import { _SecurityGroupIds } from "./_SecurityGroupIds";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _VpcConfig: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    vpcId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    subnets: {
      shape: _Subnets
    },
    securityGroupIds: {
      shape: _SecurityGroupIds
    }
  }
};
