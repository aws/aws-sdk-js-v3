import { Structure as _Structure_ } from "@aws-sdk/types";

export const RevokeDBSecurityGroupIngressInput: _Structure_ = {
  type: "structure",
  required: ["DBSecurityGroupName"],
  members: {
    DBSecurityGroupName: {
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
    EC2SecurityGroupId: {
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
