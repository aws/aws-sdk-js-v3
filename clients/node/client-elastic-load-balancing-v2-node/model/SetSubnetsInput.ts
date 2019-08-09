import { _Subnets } from "./_Subnets";
import { _SubnetMappings } from "./_SubnetMappings";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const SetSubnetsInput: _Structure_ = {
  type: "structure",
  required: ["LoadBalancerArn"],
  members: {
    LoadBalancerArn: {
      shape: {
        type: "string"
      }
    },
    Subnets: {
      shape: _Subnets
    },
    SubnetMappings: {
      shape: _SubnetMappings
    }
  }
};
