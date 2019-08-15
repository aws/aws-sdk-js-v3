import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Permission: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    StackId: {
      shape: {
        type: "string"
      }
    },
    IamUserArn: {
      shape: {
        type: "string"
      }
    },
    AllowSsh: {
      shape: {
        type: "boolean"
      }
    },
    AllowSudo: {
      shape: {
        type: "boolean"
      }
    },
    Level: {
      shape: {
        type: "string"
      }
    }
  }
};
