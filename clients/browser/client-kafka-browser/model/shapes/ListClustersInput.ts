import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListClustersInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ClusterNameFilter: {
      shape: {
        type: "string"
      },
      location: "querystring",
      locationName: "clusterNameFilter"
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
