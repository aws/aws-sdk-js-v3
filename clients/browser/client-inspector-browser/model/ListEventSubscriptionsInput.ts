import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListEventSubscriptionsInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    resourceArn: {
      shape: {
        type: "string",
        min: 1
      }
    },
    nextToken: {
      shape: {
        type: "string",
        min: 1
      }
    },
    maxResults: {
      shape: {
        type: "integer"
      }
    }
  }
};
