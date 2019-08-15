import { _Subnets } from "./_Subnets";
import { _SubnetMappings } from "./_SubnetMappings";
import { _SecurityGroups } from "./_SecurityGroups";
import { _TagList } from "./_TagList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateLoadBalancerInput: _Structure_ = {
  type: "structure",
  required: ["Name"],
  members: {
    Name: {
      shape: {
        type: "string"
      }
    },
    Subnets: {
      shape: _Subnets
    },
    SubnetMappings: {
      shape: _SubnetMappings
    },
    SecurityGroups: {
      shape: _SecurityGroups
    },
    Scheme: {
      shape: {
        type: "string"
      }
    },
    Tags: {
      shape: _TagList
    },
    Type: {
      shape: {
        type: "string"
      }
    },
    IpAddressType: {
      shape: {
        type: "string"
      }
    }
  }
};
