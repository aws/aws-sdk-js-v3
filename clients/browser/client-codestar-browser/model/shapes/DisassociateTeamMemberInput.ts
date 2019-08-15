import { Structure as _Structure_ } from "@aws-sdk/types";

export const DisassociateTeamMemberInput: _Structure_ = {
  type: "structure",
  required: ["projectId", "userArn"],
  members: {
    projectId: {
      shape: {
        type: "string",
        min: 2
      }
    },
    userArn: {
      shape: {
        type: "string",
        min: 32
      }
    }
  }
};
