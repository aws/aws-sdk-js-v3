import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeRestoreJobOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    RestoreJobId: {
      shape: {
        type: "string"
      }
    },
    RecoveryPointArn: {
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
    Status: {
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
    ExpectedCompletionTimeMinutes: {
      shape: {
        type: "integer"
      }
    },
    CreatedResourceArn: {
      shape: {
        type: "string"
      }
    }
  }
};
