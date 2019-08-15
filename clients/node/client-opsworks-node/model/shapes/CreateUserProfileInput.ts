import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateUserProfileInput: _Structure_ = {
  type: "structure",
  required: ["IamUserArn"],
  members: {
    IamUserArn: {
      shape: {
        type: "string"
      }
    },
    SshUsername: {
      shape: {
        type: "string"
      }
    },
    SshPublicKey: {
      shape: {
        type: "string"
      }
    },
    AllowSelfManagement: {
      shape: {
        type: "boolean"
      }
    }
  }
};
