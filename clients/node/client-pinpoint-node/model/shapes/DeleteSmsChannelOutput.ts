import { _SMSChannelResponse } from "./_SMSChannelResponse";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteSmsChannelOutput: _Structure_ = {
  type: "structure",
  required: ["SMSChannelResponse"],
  members: {
    SMSChannelResponse: {
      shape: _SMSChannelResponse
    }
  },
  payload: "SMSChannelResponse"
};
