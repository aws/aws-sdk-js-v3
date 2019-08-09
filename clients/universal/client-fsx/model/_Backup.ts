import { _BackupFailureDetails } from "./_BackupFailureDetails";
import { _Tags } from "./_Tags";
import { _FileSystem } from "./_FileSystem";
import { _ActiveDirectoryBackupAttributes } from "./_ActiveDirectoryBackupAttributes";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Backup: _Structure_ = {
  type: "structure",
  required: ["BackupId", "Lifecycle", "Type", "CreationTime", "FileSystem"],
  members: {
    BackupId: {
      shape: {
        type: "string",
        min: 12
      }
    },
    Lifecycle: {
      shape: {
        type: "string"
      }
    },
    FailureDetails: {
      shape: _BackupFailureDetails
    },
    Type: {
      shape: {
        type: "string"
      }
    },
    ProgressPercent: {
      shape: {
        type: "integer"
      }
    },
    CreationTime: {
      shape: {
        type: "timestamp"
      }
    },
    KmsKeyId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ResourceARN: {
      shape: {
        type: "string",
        min: 8
      }
    },
    Tags: {
      shape: _Tags
    },
    FileSystem: {
      shape: _FileSystem
    },
    DirectoryInformation: {
      shape: _ActiveDirectoryBackupAttributes
    }
  }
};
