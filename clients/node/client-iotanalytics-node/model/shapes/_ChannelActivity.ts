import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ChannelActivity: _Structure_ = {
  type: "structure",
  required: ["name", "channelName"],
  members: {
    name: {
      shape: {
        type: "string",
        min: 1
      }
    },
    channelName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    next: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
