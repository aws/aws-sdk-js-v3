import { _NotificationConfig } from "./_NotificationConfig";
import { _Parameters } from "./_Parameters";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _MaintenanceWindowRunCommandParameters: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Comment: {
      shape: {
        type: "string"
      }
    },
    DocumentHash: {
      shape: {
        type: "string"
      }
    },
    DocumentHashType: {
      shape: {
        type: "string"
      }
    },
    NotificationConfig: {
      shape: _NotificationConfig
    },
    OutputS3BucketName: {
      shape: {
        type: "string",
        min: 3
      }
    },
    OutputS3KeyPrefix: {
      shape: {
        type: "string"
      }
    },
    Parameters: {
      shape: _Parameters
    },
    ServiceRoleArn: {
      shape: {
        type: "string"
      }
    },
    TimeoutSeconds: {
      shape: {
        type: "integer",
        min: 30
      }
    }
  }
};
