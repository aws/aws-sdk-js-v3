import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteClusterInput: _Structure_ = {
  type: "structure",
  required: ["ClusterName"],
  members: {
    ClusterName: {
      shape: {
        type: "string"
      }
    }
  }
};
