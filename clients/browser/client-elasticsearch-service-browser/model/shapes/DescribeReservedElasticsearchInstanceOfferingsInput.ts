import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeReservedElasticsearchInstanceOfferingsInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ReservedElasticsearchInstanceOfferingId: {
      shape: {
        type: "string"
      },
      location: "querystring",
      locationName: "offeringId"
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
