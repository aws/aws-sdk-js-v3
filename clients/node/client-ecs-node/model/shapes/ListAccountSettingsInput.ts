import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListAccountSettingsInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    name: {
      shape: {
        type: "string"
      }
    },
    value: {
      shape: {
        type: "string"
      }
    },
    principalArn: {
      shape: {
        type: "string"
      }
    },
    effectiveSettings: {
      shape: {
        type: "boolean"
      }
    },
    nextToken: {
      shape: {
        type: "string"
      }
    },
    maxResults: {
      shape: {
        type: "integer"
      }
    }
  }
};
