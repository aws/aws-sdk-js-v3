import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Limits: _Structure_ = {
  type: "structure",
  required: ["MaximumReplicationCount", "MaximumPartitionCount"],
  members: {
    MaximumReplicationCount: {
      shape: {
        type: "integer",
        min: 1
      }
    },
    MaximumPartitionCount: {
      shape: {
        type: "integer",
        min: 1
      }
    }
  }
};
