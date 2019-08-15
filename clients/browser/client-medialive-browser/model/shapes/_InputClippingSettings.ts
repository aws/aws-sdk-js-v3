import { _StartTimecode } from "./_StartTimecode";
import { _StopTimecode } from "./_StopTimecode";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _InputClippingSettings: _Structure_ = {
  type: "structure",
  required: ["InputTimecodeSource"],
  members: {
    InputTimecodeSource: {
      shape: {
        type: "string"
      },
      locationName: "inputTimecodeSource"
    },
    StartTimecode: {
      shape: _StartTimecode,
      locationName: "startTimecode"
    },
    StopTimecode: {
      shape: _StopTimecode,
      locationName: "stopTimecode"
    }
  }
};
