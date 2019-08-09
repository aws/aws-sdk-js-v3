import { _Presets } from "./_Presets";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListPresetsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Presets: {
      shape: _Presets
    },
    NextPageToken: {
      shape: {
        type: "string"
      }
    }
  }
};
