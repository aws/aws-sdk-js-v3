import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ScheduledInstancesEbs: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    DeleteOnTermination: {
      shape: {
        type: "boolean"
      }
    },
    Encrypted: {
      shape: {
        type: "boolean"
      }
    },
    Iops: {
      shape: {
        type: "integer"
      }
    },
    SnapshotId: {
      shape: {
        type: "string"
      }
    },
    VolumeSize: {
      shape: {
        type: "integer"
      }
    },
    VolumeType: {
      shape: {
        type: "string"
      }
    }
  }
};
