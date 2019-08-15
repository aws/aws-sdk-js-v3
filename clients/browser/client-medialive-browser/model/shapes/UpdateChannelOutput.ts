import { _Channel } from "./_Channel";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateChannelOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Channel: {
      shape: _Channel,
      locationName: "channel"
    }
  }
};
