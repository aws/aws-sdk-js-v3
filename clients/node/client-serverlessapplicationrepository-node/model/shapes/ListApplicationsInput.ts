import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListApplicationsInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    MaxItems: {
      shape: {
        type: "integer",
        min: 1
      },
      location: "querystring",
      locationName: "maxItems"
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
