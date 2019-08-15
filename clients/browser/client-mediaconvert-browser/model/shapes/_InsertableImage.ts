import { Structure as _Structure_ } from "@aws-sdk/types";

export const _InsertableImage: _Structure_ = {
  type: "structure",
  required: [],
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
        type: "integer"
      },
      locationName: "height"
    },
    ImageInserterInput: {
      shape: {
        type: "string",
        min: 14
      },
      locationName: "imageInserterInput"
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
    StartTime: {
      shape: {
        type: "string"
      },
      locationName: "startTime"
    },
    Width: {
      shape: {
        type: "integer"
      },
      locationName: "width"
    }
  }
};
