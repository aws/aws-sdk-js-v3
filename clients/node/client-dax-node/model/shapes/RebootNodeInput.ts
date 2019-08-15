import { Structure as _Structure_ } from "@aws-sdk/types";

export const RebootNodeInput: _Structure_ = {
  type: "structure",
  required: ["ClusterName", "NodeId"],
  members: {
    ClusterName: {
      shape: {
        type: "string"
      }
    },
    NodeId: {
      shape: {
        type: "string"
      }
    }
  }
};
