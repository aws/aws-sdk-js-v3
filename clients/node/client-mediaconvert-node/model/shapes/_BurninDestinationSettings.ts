import { Structure as _Structure_ } from "@aws-sdk/types";

export const _BurninDestinationSettings: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Alignment: {
      shape: {
        type: "string"
      },
      locationName: "alignment"
    },
    BackgroundColor: {
      shape: {
        type: "string"
      },
      locationName: "backgroundColor"
    },
    BackgroundOpacity: {
      shape: {
        type: "integer"
      },
      locationName: "backgroundOpacity"
    },
    FontColor: {
      shape: {
        type: "string"
      },
      locationName: "fontColor"
    },
    FontOpacity: {
      shape: {
        type: "integer"
      },
      locationName: "fontOpacity"
    },
    FontResolution: {
      shape: {
        type: "integer",
        min: 96
      },
      locationName: "fontResolution"
    },
    FontScript: {
      shape: {
        type: "string"
      },
      locationName: "fontScript"
    },
    FontSize: {
      shape: {
        type: "integer"
      },
      locationName: "fontSize"
    },
    OutlineColor: {
      shape: {
        type: "string"
      },
      locationName: "outlineColor"
    },
    OutlineSize: {
      shape: {
        type: "integer"
      },
      locationName: "outlineSize"
    },
    ShadowColor: {
      shape: {
        type: "string"
      },
      locationName: "shadowColor"
    },
    ShadowOpacity: {
      shape: {
        type: "integer"
      },
      locationName: "shadowOpacity"
    },
    ShadowXOffset: {
      shape: {
        type: "integer",
        min: -2147483648
      },
      locationName: "shadowXOffset"
    },
    ShadowYOffset: {
      shape: {
        type: "integer",
        min: -2147483648
      },
      locationName: "shadowYOffset"
    },
    TeletextSpacing: {
      shape: {
        type: "string"
      },
      locationName: "teletextSpacing"
    },
    XPosition: {
      shape: {
        type: "integer"
      },
      locationName: "xPosition"
    },
    YPosition: {
      shape: {
        type: "integer"
      },
      locationName: "yPosition"
    }
  }
};
