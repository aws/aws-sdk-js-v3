import { ___listOfOutputDestination } from "./___listOfOutputDestination";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateChannelClassInput: _Structure_ = {
  type: "structure",
  required: ["ChannelId", "ChannelClass"],
  members: {
    ChannelClass: {
      shape: {
        type: "string"
      },
      locationName: "channelClass"
    },
    ChannelId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "channelId"
    },
    Destinations: {
      shape: ___listOfOutputDestination,
      locationName: "destinations"
    }
  }
};
