import { Structure as _Structure_ } from "@aws-sdk/types";

export const AuthorizeClusterSecurityGroupIngressInput: _Structure_ = {
  type: "structure",
  required: ["ClusterSecurityGroupName"],
  members: {
    ClusterSecurityGroupName: {
      shape: {
        type: "string"
      }
    },
    CIDRIP: {
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
