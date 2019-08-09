import { _ChannelSummaries } from "./_ChannelSummaries";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListChannelsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    channelSummaries: {
      shape: _ChannelSummaries
    },
    nextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
