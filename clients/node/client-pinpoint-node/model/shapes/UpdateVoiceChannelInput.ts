import { _VoiceChannelRequest } from "./_VoiceChannelRequest";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateVoiceChannelInput: _Structure_ = {
  type: "structure",
  required: ["ApplicationId", "VoiceChannelRequest"],
  members: {
    ApplicationId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "application-id"
    },
    VoiceChannelRequest: {
      shape: _VoiceChannelRequest
    }
  },
  payload: "VoiceChannelRequest"
};
