import { _TagList } from "./_TagList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _SnapshotInfo: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Description: {
      shape: {
        type: "string"
      },
      locationName: "description"
    },
    Tags: {
      shape: _TagList,
      locationName: "tagSet"
    },
    Encrypted: {
      shape: {
        type: "boolean"
      },
      locationName: "encrypted"
    },
    VolumeId: {
      shape: {
        type: "string"
      },
      locationName: "volumeId"
    },
    State: {
      shape: {
        type: "string"
      },
      locationName: "state"
    },
    VolumeSize: {
      shape: {
        type: "integer"
      },
      locationName: "volumeSize"
    },
    StartTime: {
      shape: {
        type: "timestamp"
      },
      locationName: "startTime"
    },
    Progress: {
      shape: {
        type: "string"
      },
      locationName: "progress"
    },
    OwnerId: {
      shape: {
        type: "string"
      },
      locationName: "ownerId"
    },
    SnapshotId: {
      shape: {
        type: "string"
      },
      locationName: "snapshotId"
    }
  }
};
