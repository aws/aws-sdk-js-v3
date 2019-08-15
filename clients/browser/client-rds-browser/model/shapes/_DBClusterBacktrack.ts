import { Structure as _Structure_ } from "@aws-sdk/types";

export const _DBClusterBacktrack: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    DBClusterIdentifier: {
      shape: {
        type: "string"
      }
    },
    BacktrackIdentifier: {
      shape: {
        type: "string"
      }
    },
    BacktrackTo: {
      shape: {
        type: "timestamp"
      }
    },
    BacktrackedFrom: {
      shape: {
        type: "timestamp"
      }
    },
    BacktrackRequestCreationTime: {
      shape: {
        type: "timestamp"
      }
    },
    Status: {
      shape: {
        type: "string"
      }
    }
  }
};
