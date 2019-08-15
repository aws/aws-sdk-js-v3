import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeFleetHistoryInput: _Structure_ = {
  type: "structure",
  required: ["FleetId", "StartTime"],
  members: {
    DryRun: {
      shape: {
        type: "boolean"
      }
    },
    EventType: {
      shape: {
        type: "string"
      }
    },
    MaxResults: {
      shape: {
        type: "integer"
      }
    },
    NextToken: {
      shape: {
        type: "string"
      }
    },
    FleetId: {
      shape: {
        type: "string"
      }
    },
    StartTime: {
      shape: {
        type: "timestamp"
      }
    }
  }
};
