import { _Parameters } from "./_Parameters";
import { _InstanceIdList } from "./_InstanceIdList";
import { _Targets } from "./_Targets";
import { _NotificationConfig } from "./_NotificationConfig";
import { _CloudWatchOutputConfig } from "./_CloudWatchOutputConfig";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Command: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    CommandId: {
      shape: {
        type: "string",
        min: 36
      }
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
    Comment: {
      shape: {
        type: "string"
      }
    },
    ExpiresAfter: {
      shape: {
        type: "timestamp"
      }
    },
    Parameters: {
      shape: _Parameters
    },
    InstanceIds: {
      shape: _InstanceIdList
    },
    Targets: {
      shape: _Targets
    },
    RequestedDateTime: {
      shape: {
        type: "timestamp"
      }
    },
    Status: {
      shape: {
        type: "string"
      }
    },
    StatusDetails: {
      shape: {
        type: "string"
      }
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
    TargetCount: {
      shape: {
        type: "integer"
      }
    },
    CompletedCount: {
      shape: {
        type: "integer"
      }
    },
    ErrorCount: {
      shape: {
        type: "integer"
      }
    },
    DeliveryTimedOutCount: {
      shape: {
        type: "integer"
      }
    },
    ServiceRole: {
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
