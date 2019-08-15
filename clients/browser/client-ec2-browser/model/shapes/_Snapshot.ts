import { _TagList } from "./_TagList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Snapshot: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    DataEncryptionKeyId: {
      shape: {
        type: "string"
      },
      locationName: "dataEncryptionKeyId"
    },
    Description: {
      shape: {
        type: "string"
      },
      locationName: "description"
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
    OwnerId: {
      shape: {
        type: "string"
      },
      locationName: "ownerId"
    },
    Progress: {
      shape: {
        type: "string"
      },
      locationName: "progress"
    },
    SnapshotId: {
      shape: {
        type: "string"
      },
      locationName: "snapshotId"
    },
    StartTime: {
      shape: {
        type: "timestamp"
      },
      locationName: "startTime"
    },
    State: {
      shape: {
        type: "string"
      },
      locationName: "status"
    },
    StateMessage: {
      shape: {
        type: "string"
      },
      locationName: "statusMessage"
    },
    VolumeId: {
      shape: {
        type: "string"
      },
      locationName: "volumeId"
    },
    VolumeSize: {
      shape: {
        type: "integer"
      },
      locationName: "volumeSize"
    },
    OwnerAlias: {
      shape: {
        type: "string"
      },
      locationName: "ownerAlias"
    },
    Tags: {
      shape: _TagList,
      locationName: "tagSet"
    }
  }
};
