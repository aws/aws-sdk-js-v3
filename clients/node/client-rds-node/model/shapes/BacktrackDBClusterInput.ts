import { Structure as _Structure_ } from "@aws-sdk/types";

export const BacktrackDBClusterInput: _Structure_ = {
  type: "structure",
  required: ["DBClusterIdentifier", "BacktrackTo"],
  members: {
    DBClusterIdentifier: {
      shape: {
        type: "string"
      }
    },
    BacktrackTo: {
      shape: {
        type: "timestamp"
      }
    },
    Force: {
      shape: {
        type: "boolean"
      }
    },
    UseEarliestTimeOnPointInTimeUnavailable: {
      shape: {
        type: "boolean"
      }
    }
  }
};
