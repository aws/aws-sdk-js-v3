import { _SentimentDetectionJobProperties } from "./_SentimentDetectionJobProperties";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeSentimentDetectionJobOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    SentimentDetectionJobProperties: {
      shape: _SentimentDetectionJobProperties
    }
  }
};
