import { Structure as _Structure_ } from "@aws-sdk/types";

export const AssociateTeamMemberInput: _Structure_ = {
  type: "structure",
  required: ["projectId", "userArn", "projectRole"],
  members: {
    projectId: {
      shape: {
        type: "string",
        min: 2
      }
    },
    clientRequestToken: {
      shape: {
        type: "string",
        min: 1
      }
    },
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
