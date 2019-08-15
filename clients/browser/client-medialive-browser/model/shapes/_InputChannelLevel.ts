import { Structure as _Structure_ } from "@aws-sdk/types";

export const _InputChannelLevel: _Structure_ = {
  type: "structure",
  required: ["InputChannel", "Gain"],
  members: {
    Gain: {
      shape: {
        type: "integer",
        min: -60
      },
      locationName: "gain"
    },
    InputChannel: {
      shape: {
        type: "integer"
      },
      locationName: "inputChannel"
    }
  }
};
