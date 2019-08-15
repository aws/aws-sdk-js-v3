import { Structure as _Structure_ } from "@aws-sdk/types";

export const _GCMChannelRequest: _Structure_ = {
  type: "structure",
  required: ["ApiKey"],
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
    }
  }
};
