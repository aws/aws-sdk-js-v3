import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeSpotFleetRequestHistoryInput: _Structure_ = {
  type: "structure",
  required: ["SpotFleetRequestId", "StartTime"],
  members: {
    DryRun: {
      shape: {
        type: "boolean"
      },
      locationName: "dryRun"
    },
    EventType: {
      shape: {
        type: "string"
      },
      locationName: "eventType"
    },
    MaxResults: {
      shape: {
        type: "integer",
        min: 1
      },
      locationName: "maxResults"
    },
    NextToken: {
      shape: {
        type: "string"
      },
      locationName: "nextToken"
    },
    SpotFleetRequestId: {
      shape: {
        type: "string"
      },
      locationName: "spotFleetRequestId"
    },
    StartTime: {
      shape: {
        type: "timestamp"
      },
      locationName: "startTime"
    }
  }
};
