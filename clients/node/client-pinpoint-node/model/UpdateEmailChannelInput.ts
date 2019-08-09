import { _EmailChannelRequest } from "./_EmailChannelRequest";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateEmailChannelInput: _Structure_ = {
  type: "structure",
  required: ["ApplicationId", "EmailChannelRequest"],
  members: {
    ApplicationId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "application-id"
    },
    EmailChannelRequest: {
      shape: _EmailChannelRequest
    }
  },
  payload: "EmailChannelRequest"
};
