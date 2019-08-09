import { Structure as _Structure_ } from "@aws-sdk/types";

export const _SelfUserProfile: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    IamUserArn: {
      shape: {
        type: "string"
      }
    },
    Name: {
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
    }
  }
};
