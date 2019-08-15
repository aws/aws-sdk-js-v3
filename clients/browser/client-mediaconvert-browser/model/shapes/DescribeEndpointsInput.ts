import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeEndpointsInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    MaxResults: {
      shape: {
        type: "integer"
      },
      locationName: "maxResults"
    },
    Mode: {
      shape: {
        type: "string"
      },
      locationName: "mode"
    },
    NextToken: {
      shape: {
        type: "string"
      },
      locationName: "nextToken"
    }
  }
};
