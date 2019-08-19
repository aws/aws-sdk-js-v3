import { _PLSubnetArnList } from "./_PLSubnetArnList";
import { _PLSecurityGroupArnList } from "./_PLSecurityGroupArnList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _PrivateLinkConfig: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    VpcEndpointId: {
      shape: {
        type: "string"
      }
    },
    PrivateLinkEndpoint: {
      shape: {
        type: "string",
        min: 7
      }
    },
    SubnetArns: {
      shape: _PLSubnetArnList
    },
    SecurityGroupArns: {
      shape: _PLSecurityGroupArnList
    }
  }
};
