import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Trail: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Name: {
      shape: {
        type: "string"
      }
    },
    S3BucketName: {
      shape: {
        type: "string"
      }
    },
    S3KeyPrefix: {
      shape: {
        type: "string"
      }
    },
    SnsTopicName: {
      shape: {
        type: "string"
      }
    },
    SnsTopicARN: {
      shape: {
        type: "string"
      }
    },
    IncludeGlobalServiceEvents: {
      shape: {
        type: "boolean"
      }
    },
    IsMultiRegionTrail: {
      shape: {
        type: "boolean"
      }
    },
    HomeRegion: {
      shape: {
        type: "string"
      }
    },
    TrailARN: {
      shape: {
        type: "string"
      }
    },
    LogFileValidationEnabled: {
      shape: {
        type: "boolean"
      }
    },
    CloudWatchLogsLogGroupArn: {
      shape: {
        type: "string"
      }
    },
    CloudWatchLogsRoleArn: {
      shape: {
        type: "string"
      }
    },
    KmsKeyId: {
      shape: {
        type: "string"
      }
    },
    HasCustomEventSelectors: {
      shape: {
        type: "boolean"
      }
    },
    IsOrganizationTrail: {
      shape: {
        type: "boolean"
      }
    }
  }
};
