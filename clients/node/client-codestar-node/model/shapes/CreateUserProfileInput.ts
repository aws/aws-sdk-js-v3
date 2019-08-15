import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateUserProfileInput: _Structure_ = {
  type: "structure",
  required: ["userArn", "displayName", "emailAddress"],
  members: {
    userArn: {
      shape: {
        type: "string",
        min: 32
      }
    },
    displayName: {
      shape: {
        type: "string",
        sensitive: true,
        min: 1
      }
    },
    emailAddress: {
      shape: {
        type: "string",
        sensitive: true,
        min: 3
      }
    },
    sshPublicKey: {
      shape: {
        type: "string"
      }
    }
  }
};
