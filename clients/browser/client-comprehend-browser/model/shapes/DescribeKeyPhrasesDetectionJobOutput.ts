import { _KeyPhrasesDetectionJobProperties } from "./_KeyPhrasesDetectionJobProperties";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeKeyPhrasesDetectionJobOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    KeyPhrasesDetectionJobProperties: {
      shape: _KeyPhrasesDetectionJobProperties
    }
  }
};
