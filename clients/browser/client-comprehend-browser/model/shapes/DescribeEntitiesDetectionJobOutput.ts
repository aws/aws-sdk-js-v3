import { _EntitiesDetectionJobProperties } from "./_EntitiesDetectionJobProperties";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeEntitiesDetectionJobOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    EntitiesDetectionJobProperties: {
      shape: _EntitiesDetectionJobProperties
    }
  }
};
