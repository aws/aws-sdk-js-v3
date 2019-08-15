import { _GroupFilterList } from "./_GroupFilterList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListGroupsInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Filters: {
      shape: _GroupFilterList
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
