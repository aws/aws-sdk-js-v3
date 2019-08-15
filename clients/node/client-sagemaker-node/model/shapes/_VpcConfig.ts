import { _VpcSecurityGroupIds } from "./_VpcSecurityGroupIds";
import { _Subnets } from "./_Subnets";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _VpcConfig: _Structure_ = {
  type: "structure",
  required: ["SecurityGroupIds", "Subnets"],
  members: {
    SecurityGroupIds: {
      shape: _VpcSecurityGroupIds
    },
    Subnets: {
      shape: _Subnets
    }
  }
};
