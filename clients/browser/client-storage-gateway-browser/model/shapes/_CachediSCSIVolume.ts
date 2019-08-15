import { _VolumeiSCSIAttributes } from "./_VolumeiSCSIAttributes";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _CachediSCSIVolume: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    VolumeARN: {
      shape: {
        type: "string",
        min: 50
      }
    },
    VolumeId: {
      shape: {
        type: "string",
        min: 12
      }
    },
    VolumeType: {
      shape: {
        type: "string",
        min: 3
      }
    },
    VolumeStatus: {
      shape: {
        type: "string",
        min: 3
      }
    },
    VolumeAttachmentStatus: {
      shape: {
        type: "string",
        min: 3
      }
    },
    VolumeSizeInBytes: {
      shape: {
        type: "integer"
      }
    },
    VolumeProgress: {
      shape: {
        type: "float"
      }
    },
    SourceSnapshotId: {
      shape: {
        type: "string"
      }
    },
    VolumeiSCSIAttributes: {
      shape: _VolumeiSCSIAttributes
    },
    CreatedDate: {
      shape: {
        type: "timestamp"
      }
    },
    VolumeUsedInBytes: {
      shape: {
        type: "integer"
      }
    },
    KMSKey: {
      shape: {
        type: "string",
        min: 7
      }
    },
    TargetName: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
