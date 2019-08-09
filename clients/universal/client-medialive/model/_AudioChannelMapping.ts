import { ___listOfInputChannelLevel } from "./___listOfInputChannelLevel";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _AudioChannelMapping: _Structure_ = {
  type: "structure",
  required: ["OutputChannel", "InputChannelLevels"],
  members: {
    InputChannelLevels: {
      shape: ___listOfInputChannelLevel,
      locationName: "inputChannelLevels"
    },
    OutputChannel: {
      shape: {
        type: "integer"
      },
      locationName: "outputChannel"
    }
  }
};
