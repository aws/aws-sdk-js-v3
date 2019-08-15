import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Webhook: _Structure_ = {
  type: "structure",
  required: [
    "webhookArn",
    "webhookId",
    "webhookUrl",
    "branchName",
    "description",
    "createTime",
    "updateTime"
  ],
  members: {
    webhookArn: {
      shape: {
        type: "string"
      }
    },
    webhookId: {
      shape: {
        type: "string"
      }
    },
    webhookUrl: {
      shape: {
        type: "string"
      }
    },
    branchName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    description: {
      shape: {
        type: "string"
      }
    },
    createTime: {
      shape: {
        type: "timestamp"
      }
    },
    updateTime: {
      shape: {
        type: "timestamp"
      }
    }
  }
};
