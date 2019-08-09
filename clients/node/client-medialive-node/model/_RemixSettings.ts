import { ___listOfAudioChannelMapping } from "./___listOfAudioChannelMapping";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _RemixSettings: _Structure_ = {
  type: "structure",
  required: ["ChannelMappings"],
  members: {
    ChannelMappings: {
      shape: ___listOfAudioChannelMapping,
      locationName: "channelMappings"
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
