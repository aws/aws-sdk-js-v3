import { _TopicsDetectionJobProperties } from "./_TopicsDetectionJobProperties";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeTopicsDetectionJobOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    TopicsDetectionJobProperties: {
      shape: _TopicsDetectionJobProperties
    }
  }
};
