import { _VoiceChannelResponse } from "./_VoiceChannelResponse";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateVoiceChannelOutput: _Structure_ = {
  type: "structure",
  required: ["VoiceChannelResponse"],
  members: {
    VoiceChannelResponse: {
      shape: _VoiceChannelResponse
    }
  },
  payload: "VoiceChannelResponse"
};
