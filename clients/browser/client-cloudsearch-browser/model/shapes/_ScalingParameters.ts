import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ScalingParameters: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    DesiredInstanceType: {
      shape: {
        type: "string"
      }
    },
    DesiredReplicationCount: {
      shape: {
        type: "integer"
      }
    },
    DesiredPartitionCount: {
      shape: {
        type: "integer"
      }
    }
  }
};
