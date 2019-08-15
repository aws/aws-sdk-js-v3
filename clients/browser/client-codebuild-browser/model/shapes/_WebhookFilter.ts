import { Structure as _Structure_ } from "@aws-sdk/types";

export const _WebhookFilter: _Structure_ = {
  type: "structure",
  required: ["type", "pattern"],
  members: {
    type: {
      shape: {
        type: "string"
      }
    },
    pattern: {
      shape: {
        type: "string"
      }
    },
    excludeMatchedPattern: {
      shape: {
        type: "boolean"
      }
    }
  }
};
