import { _CloudWatchOutputConfig } from "./_CloudWatchOutputConfig";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetCommandInvocationOutput: _Structure_ = {
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
    PluginName: {
      shape: {
        type: "string",
        min: 4
      }
    },
    ResponseCode: {
      shape: {
        type: "integer"
      }
    },
    ExecutionStartDateTime: {
      shape: {
        type: "string"
      }
    },
    ExecutionElapsedTime: {
      shape: {
        type: "string"
      }
    },
    ExecutionEndDateTime: {
      shape: {
        type: "string"
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
    StandardOutputContent: {
      shape: {
        type: "string"
      }
    },
    StandardOutputUrl: {
      shape: {
        type: "string"
      }
    },
    StandardErrorContent: {
      shape: {
        type: "string"
      }
    },
    StandardErrorUrl: {
      shape: {
        type: "string"
      }
    },
    CloudWatchOutputConfig: {
      shape: _CloudWatchOutputConfig
    }
  }
};
