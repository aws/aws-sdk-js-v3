import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListClusterOperationsInput: _Structure_ = {
  type: "structure",
  required: ["ClusterArn"],
  members: {
    ClusterArn: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "clusterArn"
    },
    MaxResults: {
      shape: {
        type: "integer",
        min: 1
      },
      location: "querystring",
      locationName: "maxResults"
    },
    NextToken: {
      shape: {
        type: "string"
      },
      location: "querystring",
      locationName: "nextToken"
    }
  }
};
