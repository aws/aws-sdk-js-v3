import { Structure as _Structure_ } from "@aws-sdk/types";

export const _MediaPackageOutputDestinationSettings: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ChannelId: {
      shape: {
        type: "string",
        min: 1
      },
      locationName: "channelId"
    }
  }
};
