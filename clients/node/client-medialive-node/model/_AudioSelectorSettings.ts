import { _AudioLanguageSelection } from "./_AudioLanguageSelection";
import { _AudioPidSelection } from "./_AudioPidSelection";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _AudioSelectorSettings: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    AudioLanguageSelection: {
      shape: _AudioLanguageSelection,
      locationName: "audioLanguageSelection"
    },
    AudioPidSelection: {
      shape: _AudioPidSelection,
      locationName: "audioPidSelection"
    }
  }
};
