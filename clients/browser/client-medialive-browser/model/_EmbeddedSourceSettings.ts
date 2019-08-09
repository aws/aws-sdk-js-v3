import { Structure as _Structure_ } from "@aws-sdk/types";

export const _EmbeddedSourceSettings: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Convert608To708: {
      shape: {
        type: "string"
      },
      locationName: "convert608To708"
    },
    Scte20Detection: {
      shape: {
        type: "string"
      },
      locationName: "scte20Detection"
    },
    Source608ChannelNumber: {
      shape: {
        type: "integer",
        min: 1
      },
      locationName: "source608ChannelNumber"
    },
    Source608TrackNumber: {
      shape: {
        type: "integer",
        min: 1
      },
      locationName: "source608TrackNumber"
    }
  }
};
