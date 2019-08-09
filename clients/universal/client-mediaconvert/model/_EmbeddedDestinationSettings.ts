import { Structure as _Structure_ } from "@aws-sdk/types";

export const _EmbeddedDestinationSettings: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Destination608ChannelNumber: {
      shape: {
        type: "integer",
        min: 1
      },
      locationName: "destination608ChannelNumber"
    },
    Destination708ServiceNumber: {
      shape: {
        type: "integer",
        min: 1
      },
      locationName: "destination708ServiceNumber"
    }
  }
};
