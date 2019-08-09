import { Structure as _Structure_ } from "@aws-sdk/types";

export const ResizeClusterInput: _Structure_ = {
  type: "structure",
  required: ["ClusterIdentifier", "NumberOfNodes"],
  members: {
    ClusterIdentifier: {
      shape: {
        type: "string"
      }
    },
    ClusterType: {
      shape: {
        type: "string"
      }
    },
    NodeType: {
      shape: {
        type: "string"
      }
    },
    NumberOfNodes: {
      shape: {
        type: "integer"
      }
    },
    Classic: {
      shape: {
        type: "boolean"
      }
    }
  }
};
