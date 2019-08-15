import { ___listOf__string } from "./___listOf__string";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _InputVpcRequest: _Structure_ = {
  type: "structure",
  required: ["SubnetIds"],
  members: {
    SecurityGroupIds: {
      shape: ___listOf__string,
      locationName: "securityGroupIds"
    },
    SubnetIds: {
      shape: ___listOf__string,
      locationName: "subnetIds"
    }
  }
};
