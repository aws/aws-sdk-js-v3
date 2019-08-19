import { Structure as _Structure_ } from "@aws-sdk/types";

export const _EbsBlockDevice: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    DeleteOnTermination: {
      shape: {
        type: "boolean"
      },
      locationName: "deleteOnTermination"
    },
    Iops: {
      shape: {
        type: "integer"
      },
      locationName: "iops"
    },
    SnapshotId: {
      shape: {
        type: "string"
      },
      locationName: "snapshotId"
    },
    VolumeSize: {
      shape: {
        type: "integer"
      },
      locationName: "volumeSize"
    },
    VolumeType: {
      shape: {
        type: "string"
      },
      locationName: "volumeType"
    },
    Encrypted: {
      shape: {
        type: "boolean"
      },
      locationName: "encrypted"
    },
    KmsKeyId: {
      shape: {
        type: "string"
      }
    }
  }
};
