import { _VolumeAttachmentList } from "./_VolumeAttachmentList";
import { _TagList } from "./_TagList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Volume: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Attachments: {
      shape: _VolumeAttachmentList,
      locationName: "attachmentSet"
    },
    AvailabilityZone: {
      shape: {
        type: "string"
      },
      locationName: "availabilityZone"
    },
    CreateTime: {
      shape: {
        type: "timestamp"
      },
      locationName: "createTime"
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
      },
      locationName: "kmsKeyId"
    },
    Size: {
      shape: {
        type: "integer"
      },
      locationName: "size"
    },
    SnapshotId: {
      shape: {
        type: "string"
      },
      locationName: "snapshotId"
    },
    State: {
      shape: {
        type: "string"
      },
      locationName: "status"
    },
    VolumeId: {
      shape: {
        type: "string"
      },
      locationName: "volumeId"
    },
    Iops: {
      shape: {
        type: "integer"
      },
      locationName: "iops"
    },
    Tags: {
      shape: _TagList,
      locationName: "tagSet"
    },
    VolumeType: {
      shape: {
        type: "string"
      },
      locationName: "volumeType"
    }
  }
};
