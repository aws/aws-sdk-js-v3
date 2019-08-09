import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteClusterSecurityGroupInput: _Structure_ = {
  type: "structure",
  required: ["ClusterSecurityGroupName"],
  members: {
    ClusterSecurityGroupName: {
      shape: {
        type: "string"
      }
    }
  }
};
