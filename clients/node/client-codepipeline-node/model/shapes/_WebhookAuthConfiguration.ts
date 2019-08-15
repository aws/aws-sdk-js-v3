import { Structure as _Structure_ } from "@aws-sdk/types";

export const _WebhookAuthConfiguration: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    AllowedIPRange: {
      shape: {
        type: "string",
        min: 1
      }
    },
    SecretToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
