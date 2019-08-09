import { _Preset } from "./_Preset";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetPresetOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Preset: {
      shape: _Preset,
      locationName: "preset"
    }
  }
};
