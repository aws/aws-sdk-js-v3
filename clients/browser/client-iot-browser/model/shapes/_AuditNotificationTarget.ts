import { Structure as _Structure_ } from "@aws-sdk/types";

export const _AuditNotificationTarget: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    targetArn: {
      shape: {
        type: "string"
      }
    },
    roleArn: {
      shape: {
        type: "string",
        min: 20
      }
    },
    enabled: {
      shape: {
        type: "boolean"
      }
    }
  }
};
