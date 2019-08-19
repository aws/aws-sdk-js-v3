import { Structure as _Structure_ } from "@aws-sdk/types";

export const _UserProfile: _Structure_ = {
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
    },
    AllowSelfManagement: {
      shape: {
        type: "boolean"
      }
    }
  }
};
