import { Structure as _Structure_ } from "@aws-sdk/types";

export const _PresetWatermark: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Id: {
      shape: {
        type: "string",
        min: 1
      }
    },
    MaxWidth: {
      shape: {
        type: "string"
      }
    },
    MaxHeight: {
      shape: {
        type: "string"
      }
    },
    SizingPolicy: {
      shape: {
        type: "string"
      }
    },
    HorizontalAlign: {
      shape: {
        type: "string"
      }
    },
    HorizontalOffset: {
      shape: {
        type: "string"
      }
    },
    VerticalAlign: {
      shape: {
        type: "string"
      }
    },
    VerticalOffset: {
      shape: {
        type: "string"
      }
    },
    Opacity: {
      shape: {
        type: "string"
      }
    },
    Target: {
      shape: {
        type: "string"
      }
    }
  }
};
