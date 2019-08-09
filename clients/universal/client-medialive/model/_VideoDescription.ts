import { _VideoCodecSettings } from "./_VideoCodecSettings";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _VideoDescription: _Structure_ = {
  type: "structure",
  required: ["Name"],
  members: {
    CodecSettings: {
      shape: _VideoCodecSettings,
      locationName: "codecSettings"
    },
    Height: {
      shape: {
        type: "integer"
      },
      locationName: "height"
    },
    Name: {
      shape: {
        type: "string"
      },
      locationName: "name"
    },
    RespondToAfd: {
      shape: {
        type: "string"
      },
      locationName: "respondToAfd"
    },
    ScalingBehavior: {
      shape: {
        type: "string"
      },
      locationName: "scalingBehavior"
    },
    Sharpness: {
      shape: {
        type: "integer"
      },
      locationName: "sharpness"
    },
    Width: {
      shape: {
        type: "integer"
      },
      locationName: "width"
    }
  }
};
