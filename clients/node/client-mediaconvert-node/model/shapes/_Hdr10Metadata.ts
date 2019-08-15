import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Hdr10Metadata: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    BluePrimaryX: {
      shape: {
        type: "integer"
      },
      locationName: "bluePrimaryX"
    },
    BluePrimaryY: {
      shape: {
        type: "integer"
      },
      locationName: "bluePrimaryY"
    },
    GreenPrimaryX: {
      shape: {
        type: "integer"
      },
      locationName: "greenPrimaryX"
    },
    GreenPrimaryY: {
      shape: {
        type: "integer"
      },
      locationName: "greenPrimaryY"
    },
    MaxContentLightLevel: {
      shape: {
        type: "integer"
      },
      locationName: "maxContentLightLevel"
    },
    MaxFrameAverageLightLevel: {
      shape: {
        type: "integer"
      },
      locationName: "maxFrameAverageLightLevel"
    },
    MaxLuminance: {
      shape: {
        type: "integer"
      },
      locationName: "maxLuminance"
    },
    MinLuminance: {
      shape: {
        type: "integer"
      },
      locationName: "minLuminance"
    },
    RedPrimaryX: {
      shape: {
        type: "integer"
      },
      locationName: "redPrimaryX"
    },
    RedPrimaryY: {
      shape: {
        type: "integer"
      },
      locationName: "redPrimaryY"
    },
    WhitePointX: {
      shape: {
        type: "integer"
      },
      locationName: "whitePointX"
    },
    WhitePointY: {
      shape: {
        type: "integer"
      },
      locationName: "whitePointY"
    }
  }
};
