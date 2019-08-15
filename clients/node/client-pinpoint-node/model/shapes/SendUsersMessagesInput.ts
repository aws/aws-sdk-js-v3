import { _SendUsersMessageRequest } from "./_SendUsersMessageRequest";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const SendUsersMessagesInput: _Structure_ = {
  type: "structure",
  required: ["ApplicationId", "SendUsersMessageRequest"],
  members: {
    ApplicationId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "application-id"
    },
    SendUsersMessageRequest: {
      shape: _SendUsersMessageRequest
    }
  },
  payload: "SendUsersMessageRequest"
};
