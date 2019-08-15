import { _AvailBlanking } from "./_AvailBlanking";
import { _EsamSettings } from "./_EsamSettings";
import { ___listOfInput } from "./___listOfInput";
import { _MotionImageInserter } from "./_MotionImageInserter";
import { _NielsenConfiguration } from "./_NielsenConfiguration";
import { ___listOfOutputGroup } from "./___listOfOutputGroup";
import { _TimecodeConfig } from "./_TimecodeConfig";
import { _TimedMetadataInsertion } from "./_TimedMetadataInsertion";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _JobSettings: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    AdAvailOffset: {
      shape: {
        type: "integer",
        min: -1000
      },
      locationName: "adAvailOffset"
    },
    AvailBlanking: {
      shape: _AvailBlanking,
      locationName: "availBlanking"
    },
    Esam: {
      shape: _EsamSettings,
      locationName: "esam"
    },
    Inputs: {
      shape: ___listOfInput,
      locationName: "inputs"
    },
    MotionImageInserter: {
      shape: _MotionImageInserter,
      locationName: "motionImageInserter"
    },
    NielsenConfiguration: {
      shape: _NielsenConfiguration,
      locationName: "nielsenConfiguration"
    },
    OutputGroups: {
      shape: ___listOfOutputGroup,
      locationName: "outputGroups"
    },
    TimecodeConfig: {
      shape: _TimecodeConfig,
      locationName: "timecodeConfig"
    },
    TimedMetadataInsertion: {
      shape: _TimedMetadataInsertion,
      locationName: "timedMetadataInsertion"
    }
  }
};
