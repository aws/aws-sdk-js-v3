import { _RecoveryPointCreator } from "./_RecoveryPointCreator";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeBackupJobOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    BackupJobId: {
      shape: {
        type: "string"
      }
    },
    BackupVaultName: {
      shape: {
        type: "string"
      }
    },
    BackupVaultArn: {
      shape: {
        type: "string"
      }
    },
    RecoveryPointArn: {
      shape: {
        type: "string"
      }
    },
    ResourceArn: {
      shape: {
        type: "string"
      }
    },
    CreationDate: {
      shape: {
        type: "timestamp"
      }
    },
    CompletionDate: {
      shape: {
        type: "timestamp"
      }
    },
    State: {
      shape: {
        type: "string"
      }
    },
    StatusMessage: {
      shape: {
        type: "string"
      }
    },
    PercentDone: {
      shape: {
        type: "string"
      }
    },
    BackupSizeInBytes: {
      shape: {
        type: "integer"
      }
    },
    IamRoleArn: {
      shape: {
        type: "string"
      }
    },
    CreatedBy: {
      shape: _RecoveryPointCreator
    },
    ResourceType: {
      shape: {
        type: "string"
      }
    },
    BytesTransferred: {
      shape: {
        type: "integer"
      }
    },
    ExpectedCompletionDate: {
      shape: {
        type: "timestamp"
      }
    },
    StartBy: {
      shape: {
        type: "timestamp"
      }
    }
  }
};
