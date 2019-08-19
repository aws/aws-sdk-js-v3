import { _APNSVoipSandboxChannelResponse } from "./_APNSVoipSandboxChannelResponse";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteApnsVoipSandboxChannelOutput: _Structure_ = {
  type: "structure",
  required: ["APNSVoipSandboxChannelResponse"],
  members: {
    APNSVoipSandboxChannelResponse: {
      shape: _APNSVoipSandboxChannelResponse
    }
  },
  payload: "APNSVoipSandboxChannelResponse"
};
