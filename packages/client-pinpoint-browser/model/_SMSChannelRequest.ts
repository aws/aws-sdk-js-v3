import { Structure as _Structure_ } from "@aws-sdk/types";

export const _SMSChannelRequest: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Enabled: {
      shape: {
        type: "boolean"
      }
    },
    SenderId: {
      shape: {
        type: "string"
      }
    },
    ShortCode: {
      shape: {
        type: "string"
      }
    }
  }
};
