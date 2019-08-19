import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeSpotFleetInstancesInput: _Structure_ = {
  type: "structure",
  required: ["SpotFleetRequestId"],
  members: {
    DryRun: {
      shape: {
        type: "boolean"
      },
      locationName: "dryRun"
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
    }
  }
};
