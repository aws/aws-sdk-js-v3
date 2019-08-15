import { ___listOfChannel } from "./___listOfChannel";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListChannelsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Channels: {
      shape: ___listOfChannel,
      locationName: "channels"
    },
    NextToken: {
      shape: {
        type: "string"
      },
      locationName: "nextToken"
    }
  }
};
