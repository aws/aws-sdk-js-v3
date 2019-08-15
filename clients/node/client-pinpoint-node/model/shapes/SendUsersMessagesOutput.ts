import { _SendUsersMessageResponse } from "./_SendUsersMessageResponse";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const SendUsersMessagesOutput: _Structure_ = {
  type: "structure",
  required: ["SendUsersMessageResponse"],
  members: {
    SendUsersMessageResponse: {
      shape: _SendUsersMessageResponse
    }
  },
  payload: "SendUsersMessageResponse"
};
