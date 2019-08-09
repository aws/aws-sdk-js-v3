import { Structure as _Structure_ } from "@aws-sdk/types";

export const ModifyClusterDbRevisionInput: _Structure_ = {
  type: "structure",
  required: ["ClusterIdentifier", "RevisionTarget"],
  members: {
    ClusterIdentifier: {
      shape: {
        type: "string"
      }
    },
    RevisionTarget: {
      shape: {
        type: "string"
      }
    }
  }
};
