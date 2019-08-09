import { _SMSChannelRequest } from "./_SMSChannelRequest";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateSmsChannelInput: _Structure_ = {
  type: "structure",
  required: ["ApplicationId", "SMSChannelRequest"],
  members: {
    ApplicationId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "application-id"
    },
    SMSChannelRequest: {
      shape: _SMSChannelRequest
    }
  },
  payload: "SMSChannelRequest"
};
