import { _GCMChannelRequest } from "./_GCMChannelRequest";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateGcmChannelInput: _Structure_ = {
  type: "structure",
  required: ["ApplicationId", "GCMChannelRequest"],
  members: {
    ApplicationId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "application-id"
    },
    GCMChannelRequest: {
      shape: _GCMChannelRequest
    }
  },
  payload: "GCMChannelRequest"
};
