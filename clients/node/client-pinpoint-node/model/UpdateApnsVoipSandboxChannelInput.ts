import { _APNSVoipSandboxChannelRequest } from "./_APNSVoipSandboxChannelRequest";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateApnsVoipSandboxChannelInput: _Structure_ = {
  type: "structure",
  required: ["ApplicationId", "APNSVoipSandboxChannelRequest"],
  members: {
    APNSVoipSandboxChannelRequest: {
      shape: _APNSVoipSandboxChannelRequest
    },
    ApplicationId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "application-id"
    }
  },
  payload: "APNSVoipSandboxChannelRequest"
};
