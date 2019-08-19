import { Structure as _Structure_ } from "@aws-sdk/types";

export const _TeamMember: _Structure_ = {
  type: "structure",
  required: ["userArn", "projectRole"],
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
