import { Structure as _Structure_ } from "@aws-sdk/types";

export const RevokeCacheSecurityGroupIngressInput: _Structure_ = {
  type: "structure",
  required: [
    "CacheSecurityGroupName",
    "EC2SecurityGroupName",
    "EC2SecurityGroupOwnerId"
  ],
  members: {
    CacheSecurityGroupName: {
      shape: {
        type: "string"
      }
    },
    EC2SecurityGroupName: {
      shape: {
        type: "string"
      }
    },
    EC2SecurityGroupOwnerId: {
      shape: {
        type: "string"
      }
    }
  }
};
