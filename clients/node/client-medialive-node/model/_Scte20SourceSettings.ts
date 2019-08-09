import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Scte20SourceSettings: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Convert608To708: {
      shape: {
        type: "string"
      },
      locationName: "convert608To708"
    },
    Source608ChannelNumber: {
      shape: {
        type: "integer",
        min: 1
      },
      locationName: "source608ChannelNumber"
    }
  }
};
