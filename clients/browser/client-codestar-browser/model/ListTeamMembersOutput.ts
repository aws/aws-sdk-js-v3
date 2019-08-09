import { _TeamMemberResult } from "./_TeamMemberResult";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListTeamMembersOutput: _Structure_ = {
  type: "structure",
  required: ["teamMembers"],
  members: {
    teamMembers: {
      shape: _TeamMemberResult
    },
    nextToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
