import { _InstanceIdList } from "./_InstanceIdList";
import { _Targets } from "./_Targets";
import { _Parameters } from "./_Parameters";
import { _NotificationConfig } from "./_NotificationConfig";
import { _CloudWatchOutputConfig } from "./_CloudWatchOutputConfig";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const SendCommandInput: _Structure_ = {
  type: "structure",
  required: ["DocumentName"],
  members: {
    InstanceIds: {
      shape: _InstanceIdList
    },
    Targets: {
      shape: _Targets
    },
    DocumentName: {
      shape: {
        type: "string"
      }
    },
    DocumentVersion: {
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
    TimeoutSeconds: {
      shape: {
        type: "integer",
        min: 30
      }
    },
    Comment: {
      shape: {
        type: "string"
      }
    },
    Parameters: {
      shape: _Parameters
    },
    OutputS3Region: {
      shape: {
        type: "string",
        min: 3
      }
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
    MaxConcurrency: {
      shape: {
        type: "string",
        min: 1
      }
    },
    MaxErrors: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ServiceRoleArn: {
      shape: {
        type: "string"
      }
    },
    NotificationConfig: {
      shape: _NotificationConfig
    },
    CloudWatchOutputConfig: {
      shape: _CloudWatchOutputConfig
    }
  }
};
