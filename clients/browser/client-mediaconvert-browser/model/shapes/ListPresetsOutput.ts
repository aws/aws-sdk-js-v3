import { ___listOfPreset } from "./___listOfPreset";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListPresetsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    NextToken: {
      shape: {
        type: "string"
      },
      locationName: "nextToken"
    },
    Presets: {
      shape: ___listOfPreset,
      locationName: "presets"
    }
  }
};
