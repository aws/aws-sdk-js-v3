import { _Channel } from "./_Channel";
import { _ChannelStatistics } from "./_ChannelStatistics";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeChannelOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    channel: {
      shape: _Channel
    },
    statistics: {
      shape: _ChannelStatistics
    }
  }
};
