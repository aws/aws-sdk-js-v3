import { _InputLossBehavior } from "./_InputLossBehavior";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _GlobalConfiguration: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    InitialAudioGain: {
      shape: {
        type: "integer",
        min: -60
      },
      locationName: "initialAudioGain"
    },
    InputEndAction: {
      shape: {
        type: "string"
      },
      locationName: "inputEndAction"
    },
    InputLossBehavior: {
      shape: _InputLossBehavior,
      locationName: "inputLossBehavior"
    },
    OutputLockingMode: {
      shape: {
        type: "string"
      },
      locationName: "outputLockingMode"
    },
    OutputTimingSource: {
      shape: {
        type: "string"
      },
      locationName: "outputTimingSource"
    },
    SupportLowFramerateInputs: {
      shape: {
        type: "string"
      },
      locationName: "supportLowFramerateInputs"
    }
  }
};
