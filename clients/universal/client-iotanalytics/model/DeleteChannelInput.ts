import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteChannelInput: _Structure_ = {
  type: "structure",
  required: ["channelName"],
  members: {
    channelName: {
      shape: {
        type: "string",
        min: 1
      },
      location: "uri",
      locationName: "channelName"
    }
  }
};
