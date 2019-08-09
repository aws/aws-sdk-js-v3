import { _ChannelsResponse } from "./_ChannelsResponse";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetChannelsOutput: _Structure_ = {
  type: "structure",
  required: ["ChannelsResponse"],
  members: {
    ChannelsResponse: {
      shape: _ChannelsResponse
    }
  },
  payload: "ChannelsResponse"
};
