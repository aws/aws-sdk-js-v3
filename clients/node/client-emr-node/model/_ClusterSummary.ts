import { _ClusterStatus } from "./_ClusterStatus";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ClusterSummary: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Id: {
      shape: {
        type: "string"
      }
    },
    Name: {
      shape: {
        type: "string"
      }
    },
    Status: {
      shape: _ClusterStatus
    },
    NormalizedInstanceHours: {
      shape: {
        type: "integer"
      }
    }
  }
};
