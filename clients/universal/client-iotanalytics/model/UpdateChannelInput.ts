import { _ChannelStorage } from "./_ChannelStorage";
import { _RetentionPeriod } from "./_RetentionPeriod";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateChannelInput: _Structure_ = {
  type: "structure",
  required: ["channelName"],
  members: {
    channelName: {
      shape: {
        type: "string",
        min: 1
      },
      location: "uri",
      locationName: "channelName"
    },
    channelStorage: {
      shape: _ChannelStorage
    },
    retentionPeriod: {
      shape: _RetentionPeriod
    }
  }
};
