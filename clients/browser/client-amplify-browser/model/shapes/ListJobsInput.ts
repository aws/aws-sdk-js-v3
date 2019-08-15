import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListJobsInput: _Structure_ = {
  type: "structure",
  required: ["appId", "branchName"],
  members: {
    appId: {
      shape: {
        type: "string",
        min: 1
      },
      location: "uri",
      locationName: "appId"
    },
    branchName: {
      shape: {
        type: "string",
        min: 1
      },
      location: "uri",
      locationName: "branchName"
    },
    nextToken: {
      shape: {
        type: "string"
      },
      location: "querystring",
      locationName: "nextToken"
    },
    maxResults: {
      shape: {
        type: "integer",
        min: 1
      },
      location: "querystring",
      locationName: "maxResults"
    }
  }
};
