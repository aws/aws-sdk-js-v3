import { Structure as _Structure_ } from "@aws-sdk/types";

export const _TrafficPolicySummary: _Structure_ = {
  type: "structure",
  required: ["Id", "Name", "Type", "LatestVersion", "TrafficPolicyCount"],
  members: {
    Id: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Name: {
      shape: {
        type: "string"
      }
    },
    Type: {
      shape: {
        type: "string"
      }
    },
    LatestVersion: {
      shape: {
        type: "integer",
        min: 1
      }
    },
    TrafficPolicyCount: {
      shape: {
        type: "integer",
        min: 1
      }
    }
  }
};
