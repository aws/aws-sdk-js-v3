import { _Ec2SecurityGroupArnList } from "./_Ec2SecurityGroupArnList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Ec2Config: _Structure_ = {
  type: "structure",
  required: ["SubnetArn", "SecurityGroupArns"],
  members: {
    SubnetArn: {
      shape: {
        type: "string"
      }
    },
    SecurityGroupArns: {
      shape: _Ec2SecurityGroupArnList
    }
  }
};
