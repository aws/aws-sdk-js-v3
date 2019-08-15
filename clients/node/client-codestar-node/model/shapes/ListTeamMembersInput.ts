import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListTeamMembersInput: _Structure_ = {
  type: "structure",
  required: ["projectId"],
  members: {
    projectId: {
      shape: {
        type: "string",
        min: 2
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
        type: "integer",
        min: 1
      }
    }
  }
};
