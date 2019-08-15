import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateTrailInput: _Structure_ = {
  type: "structure",
  required: ["Name", "S3BucketName"],
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
    EnableLogFileValidation: {
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
    IsOrganizationTrail: {
      shape: {
        type: "boolean"
      }
    }
  }
};
