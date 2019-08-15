import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteClusterSubnetGroupInput: _Structure_ = {
  type: "structure",
  required: ["ClusterSubnetGroupName"],
  members: {
    ClusterSubnetGroupName: {
      shape: {
        type: "string"
      }
    }
  }
};
