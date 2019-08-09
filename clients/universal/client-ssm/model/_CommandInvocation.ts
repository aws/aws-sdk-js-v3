import { _CommandPluginList } from "./_CommandPluginList";
import { _NotificationConfig } from "./_NotificationConfig";
import { _CloudWatchOutputConfig } from "./_CloudWatchOutputConfig";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _CommandInvocation: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    CommandId: {
      shape: {
        type: "string",
        min: 36
      }
    },
    InstanceId: {
      shape: {
        type: "string"
      }
    },
    InstanceName: {
      shape: {
        type: "string"
      }
    },
    Comment: {
      shape: {
        type: "string"
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
    TraceOutput: {
      shape: {
        type: "string"
      }
    },
    StandardOutputUrl: {
      shape: {
        type: "string"
      }
    },
    StandardErrorUrl: {
      shape: {
        type: "string"
      }
    },
    CommandPlugins: {
      shape: _CommandPluginList
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
