import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListOriginEndpointsInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ChannelId: {
      shape: {
        type: "string"
      },
      location: "querystring",
      locationName: "channelId"
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
