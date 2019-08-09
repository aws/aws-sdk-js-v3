import { Structure as _Structure_ } from "@aws-sdk/types";

export const _StaticImageDeactivateScheduleActionSettings: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    FadeOut: {
      shape: {
        type: "integer"
      },
      locationName: "fadeOut"
    },
    Layer: {
      shape: {
        type: "integer"
      },
      locationName: "layer"
    }
  }
};
