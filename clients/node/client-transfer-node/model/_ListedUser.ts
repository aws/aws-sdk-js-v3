import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ListedUser: _Structure_ = {
  type: "structure",
  required: ["Arn"],
  members: {
    Arn: {
      shape: {
        type: "string",
        min: 20
      }
    },
    HomeDirectory: {
      shape: {
        type: "string"
      }
    },
    Role: {
      shape: {
        type: "string"
      }
    },
    SshPublicKeyCount: {
      shape: {
        type: "integer"
      }
    },
    UserName: {
      shape: {
        type: "string"
      }
    }
  }
};
