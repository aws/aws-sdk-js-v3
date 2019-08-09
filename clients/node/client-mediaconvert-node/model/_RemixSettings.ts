import { _ChannelMapping } from "./_ChannelMapping";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _RemixSettings: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ChannelMapping: {
      shape: _ChannelMapping,
      locationName: "channelMapping"
    },
    ChannelsIn: {
      shape: {
        type: "integer",
        min: 1
      },
      locationName: "channelsIn"
    },
    ChannelsOut: {
      shape: {
        type: "integer",
        min: 1
      },
      locationName: "channelsOut"
    }
  }
};
