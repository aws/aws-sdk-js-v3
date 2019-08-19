import { Structure as _Structure_ } from "@aws-sdk/types";

export const _BaiduChannelRequest: _Structure_ = {
  type: "structure",
  required: ["SecretKey", "ApiKey"],
  members: {
    ApiKey: {
      shape: {
        type: "string"
      }
    },
    Enabled: {
      shape: {
        type: "boolean"
      }
    },
    SecretKey: {
      shape: {
        type: "string"
      }
    }
  }
};
