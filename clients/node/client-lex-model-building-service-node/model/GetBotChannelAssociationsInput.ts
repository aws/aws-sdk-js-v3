import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetBotChannelAssociationsInput: _Structure_ = {
  type: "structure",
  required: ["botName", "botAlias"],
  members: {
    botName: {
      shape: {
        type: "string",
        min: 2
      },
      location: "uri",
      locationName: "botName"
    },
    botAlias: {
      shape: {
        type: "string",
        min: 1
      },
      location: "uri",
      locationName: "aliasName"
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
    },
    nameContains: {
      shape: {
        type: "string",
        min: 1
      },
      location: "querystring",
      locationName: "nameContains"
    }
  }
};
