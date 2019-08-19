import { _ValueStringList } from "./_ValueStringList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeSpotFleetRequestsInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    DryRun: {
      shape: {
        type: "boolean"
      },
      locationName: "dryRun"
    },
    MaxResults: {
      shape: {
        type: "integer"
      },
      locationName: "maxResults"
    },
    NextToken: {
      shape: {
        type: "string"
      },
      locationName: "nextToken"
    },
    SpotFleetRequestIds: {
      shape: _ValueStringList,
      locationName: "spotFleetRequestId"
    }
  }
};
