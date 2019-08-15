import { Structure as _Structure_ } from "@aws-sdk/types";

export const _AccessKey: _Structure_ = {
  type: "structure",
  required: ["UserName", "AccessKeyId", "Status", "SecretAccessKey"],
  members: {
    UserName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    AccessKeyId: {
      shape: {
        type: "string",
        min: 16
      }
    },
    Status: {
      shape: {
        type: "string"
      }
    },
    SecretAccessKey: {
      shape: {
        type: "string",
        sensitive: true
      }
    },
    CreateDate: {
      shape: {
        type: "timestamp"
      }
    }
  }
};
