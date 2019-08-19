import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListOfferingsInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ChannelClass: {
      shape: {
        type: "string"
      },
      location: "querystring",
      locationName: "channelClass"
    },
    ChannelConfiguration: {
      shape: {
        type: "string"
      },
      location: "querystring",
      locationName: "channelConfiguration"
    },
    Codec: {
      shape: {
        type: "string"
      },
      location: "querystring",
      locationName: "codec"
    },
    MaxResults: {
      shape: {
        type: "integer",
        min: 1
      },
      location: "querystring",
      locationName: "maxResults"
    },
    MaximumBitrate: {
      shape: {
        type: "string"
      },
      location: "querystring",
      locationName: "maximumBitrate"
    },
    MaximumFramerate: {
      shape: {
        type: "string"
      },
      location: "querystring",
      locationName: "maximumFramerate"
    },
    NextToken: {
      shape: {
        type: "string"
      },
      location: "querystring",
      locationName: "nextToken"
    },
    Resolution: {
      shape: {
        type: "string"
      },
      location: "querystring",
      locationName: "resolution"
    },
    ResourceType: {
      shape: {
        type: "string"
      },
      location: "querystring",
      locationName: "resourceType"
    },
    SpecialFeature: {
      shape: {
        type: "string"
      },
      location: "querystring",
      locationName: "specialFeature"
    },
    VideoQuality: {
      shape: {
        type: "string"
      },
      location: "querystring",
      locationName: "videoQuality"
    }
  }
};
