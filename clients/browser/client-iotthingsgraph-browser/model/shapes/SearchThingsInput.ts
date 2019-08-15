import { Structure as _Structure_ } from "@aws-sdk/types";

export const SearchThingsInput: _Structure_ = {
  type: "structure",
  required: ["entityId"],
  members: {
    entityId: {
      shape: {
        type: "string"
      }
    },
    nextToken: {
      shape: {
        type: "string"
      }
    },
    maxResults: {
      shape: {
        type: "integer",
        min: 1
      }
    },
    namespaceVersion: {
      shape: {
        type: "integer"
      }
    }
  }
};
