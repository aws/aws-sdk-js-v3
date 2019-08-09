import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ClusterListEntry: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ClusterId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ClusterState: {
      shape: {
        type: "string"
      }
    },
    CreationDate: {
      shape: {
        type: "timestamp"
      }
    },
    Description: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
