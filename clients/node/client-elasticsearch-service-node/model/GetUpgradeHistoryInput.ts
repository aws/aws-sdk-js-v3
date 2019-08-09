import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetUpgradeHistoryInput: _Structure_ = {
  type: "structure",
  required: ["DomainName"],
  members: {
    DomainName: {
      shape: {
        type: "string",
        min: 3
      },
      location: "uri",
      locationName: "DomainName"
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
