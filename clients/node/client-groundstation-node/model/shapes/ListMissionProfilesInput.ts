import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListMissionProfilesInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    maxResults: {
      shape: {
        type: "integer"
      },
      location: "querystring",
      locationName: "maxResults"
    },
    nextToken: {
      shape: {
        type: "string"
      },
      location: "querystring",
      locationName: "nextToken"
    }
  }
};
