import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Backup: _Structure_ = {
  type: "structure",
  required: ["BackupId"],
  members: {
    BackupId: {
      shape: {
        type: "string"
      }
    },
    BackupState: {
      shape: {
        type: "string"
      }
    },
    ClusterId: {
      shape: {
        type: "string"
      }
    },
    CreateTimestamp: {
      shape: {
        type: "timestamp"
      }
    },
    CopyTimestamp: {
      shape: {
        type: "timestamp"
      }
    },
    SourceRegion: {
      shape: {
        type: "string"
      }
    },
    SourceBackup: {
      shape: {
        type: "string"
      }
    },
    SourceCluster: {
      shape: {
        type: "string"
      }
    },
    DeleteTimestamp: {
      shape: {
        type: "timestamp"
      }
    }
  }
};
