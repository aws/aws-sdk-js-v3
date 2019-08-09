import { Structure as _Structure_ } from "@aws-sdk/types";

export const _UserImportJobType: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    JobName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    JobId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    UserPoolId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    PreSignedUrl: {
      shape: {
        type: "string"
      }
    },
    CreationDate: {
      shape: {
        type: "timestamp"
      }
    },
    StartDate: {
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
    CloudWatchLogsRoleArn: {
      shape: {
        type: "string",
        min: 20
      }
    },
    ImportedUsers: {
      shape: {
        type: "integer"
      }
    },
    SkippedUsers: {
      shape: {
        type: "integer"
      }
    },
    FailedUsers: {
      shape: {
        type: "integer"
      }
    },
    CompletionMessage: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
