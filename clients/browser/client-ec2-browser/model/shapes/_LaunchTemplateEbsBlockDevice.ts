import { Structure as _Structure_ } from "@aws-sdk/types";

export const _LaunchTemplateEbsBlockDevice: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Encrypted: {
      shape: {
        type: "boolean"
      },
      locationName: "encrypted"
    },
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
    KmsKeyId: {
      shape: {
        type: "string"
      },
      locationName: "kmsKeyId"
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
    }
  }
};
