import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateTeamMemberOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    userArn: {
      shape: {
        type: "string",
        min: 32
      }
    },
    projectRole: {
      shape: {
        type: "string"
      }
    },
    remoteAccessAllowed: {
      shape: {
        type: "boolean"
      }
    }
  }
};
