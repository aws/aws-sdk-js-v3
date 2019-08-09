import { _InputLocation } from "./_InputLocation";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _StaticImageActivateScheduleActionSettings: _Structure_ = {
  type: "structure",
  required: ["Image"],
  members: {
    Duration: {
      shape: {
        type: "integer"
      },
      locationName: "duration"
    },
    FadeIn: {
      shape: {
        type: "integer"
      },
      locationName: "fadeIn"
    },
    FadeOut: {
      shape: {
        type: "integer"
      },
      locationName: "fadeOut"
    },
    Height: {
      shape: {
        type: "integer",
        min: 1
      },
      locationName: "height"
    },
    Image: {
      shape: _InputLocation,
      locationName: "image"
    },
    ImageX: {
      shape: {
        type: "integer"
      },
      locationName: "imageX"
    },
    ImageY: {
      shape: {
        type: "integer"
      },
      locationName: "imageY"
    },
    Layer: {
      shape: {
        type: "integer"
      },
      locationName: "layer"
    },
    Opacity: {
      shape: {
        type: "integer"
      },
      locationName: "opacity"
    },
    Width: {
      shape: {
        type: "integer",
        min: 1
      },
      locationName: "width"
    }
  }
};
