import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ReservationResourceSpecification: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ChannelClass: {
      shape: {
        type: "string"
      },
      locationName: "channelClass"
    },
    Codec: {
      shape: {
        type: "string"
      },
      locationName: "codec"
    },
    MaximumBitrate: {
      shape: {
        type: "string"
      },
      locationName: "maximumBitrate"
    },
    MaximumFramerate: {
      shape: {
        type: "string"
      },
      locationName: "maximumFramerate"
    },
    Resolution: {
      shape: {
        type: "string"
      },
      locationName: "resolution"
    },
    ResourceType: {
      shape: {
        type: "string"
      },
      locationName: "resourceType"
    },
    SpecialFeature: {
      shape: {
        type: "string"
      },
      locationName: "specialFeature"
    },
    VideoQuality: {
      shape: {
        type: "string"
      },
      locationName: "videoQuality"
    }
  }
};
