import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListPlacementsInput: _Structure_ = {
  type: "structure",
  required: ["projectName"],
  members: {
    projectName: {
      shape: {
        type: "string",
        min: 1
      },
      location: "uri",
      locationName: "projectName"
    },
    nextToken: {
      shape: {
        type: "string",
        min: 1
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
