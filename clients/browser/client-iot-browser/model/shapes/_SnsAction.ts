import { Structure as _Structure_ } from "@aws-sdk/types";

export const _SnsAction: _Structure_ = {
  type: "structure",
  required: ["targetArn", "roleArn"],
  members: {
    targetArn: {
      shape: {
        type: "string"
      }
    },
    roleArn: {
      shape: {
        type: "string"
      }
    },
    messageFormat: {
      shape: {
        type: "string"
      }
    }
  }
};
