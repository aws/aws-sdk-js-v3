import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListTopicRulesInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    topic: {
      shape: {
        type: "string"
      },
      location: "querystring",
      locationName: "topic"
    },
    maxResults: {
      shape: {
        type: "integer",
        min: 1
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
    },
    ruleDisabled: {
      shape: {
        type: "boolean"
      },
      location: "querystring",
      locationName: "ruleDisabled"
    }
  }
};
