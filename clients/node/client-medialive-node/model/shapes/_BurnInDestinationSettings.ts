import { _InputLocation } from "./_InputLocation";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _BurnInDestinationSettings: _Structure_ = {
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
    Font: {
      shape: _InputLocation,
      locationName: "font"
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
    FontSize: {
      shape: {
        type: "string"
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
        type: "integer"
      },
      locationName: "shadowXOffset"
    },
    ShadowYOffset: {
      shape: {
        type: "integer"
      },
      locationName: "shadowYOffset"
    },
    TeletextGridControl: {
      shape: {
        type: "string"
      },
      locationName: "teletextGridControl"
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
