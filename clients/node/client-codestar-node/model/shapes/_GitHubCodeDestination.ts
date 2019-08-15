import { Structure as _Structure_ } from "@aws-sdk/types";

export const _GitHubCodeDestination: _Structure_ = {
  type: "structure",
  required: [
    "name",
    "type",
    "owner",
    "privateRepository",
    "issuesEnabled",
    "token"
  ],
  members: {
    name: {
      shape: {
        type: "string",
        min: 1
      }
    },
    description: {
      shape: {
        type: "string",
        min: 1
      }
    },
    type: {
      shape: {
        type: "string"
      }
    },
    owner: {
      shape: {
        type: "string",
        min: 1
      }
    },
    privateRepository: {
      shape: {
        type: "boolean"
      }
    },
    issuesEnabled: {
      shape: {
        type: "boolean"
      }
    },
    token: {
      shape: {
        type: "string",
        sensitive: true,
        min: 1
      }
    }
  }
};
