import { _DominantLanguageDetectionJobProperties } from "./_DominantLanguageDetectionJobProperties";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeDominantLanguageDetectionJobOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    DominantLanguageDetectionJobProperties: {
      shape: _DominantLanguageDetectionJobProperties
    }
  }
};
