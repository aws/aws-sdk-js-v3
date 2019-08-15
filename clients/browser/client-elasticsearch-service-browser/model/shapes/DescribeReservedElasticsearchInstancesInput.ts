import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeReservedElasticsearchInstancesInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ReservedElasticsearchInstanceId: {
      shape: {
        type: "string"
      },
      location: "querystring",
      locationName: "reservationId"
    },
    MaxResults: {
      shape: {
        type: "integer"
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
