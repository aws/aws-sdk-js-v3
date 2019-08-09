import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListBulkDeploymentsInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    MaxResults: {
      shape: {
        type: "string"
      },
      location: "querystring",
      locationName: "MaxResults"
    },
    NextToken: {
      shape: {
        type: "string"
      },
      location: "querystring",
      locationName: "NextToken"
    }
  }
};
