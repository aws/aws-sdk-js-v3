import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ConfigurationRecorderStatus: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    name: {
      shape: {
        type: "string"
      }
    },
    lastStartTime: {
      shape: {
        type: "timestamp"
      }
    },
    lastStopTime: {
      shape: {
        type: "timestamp"
      }
    },
    recording: {
      shape: {
        type: "boolean"
      }
    },
    lastStatus: {
      shape: {
        type: "string"
      }
    },
    lastErrorCode: {
      shape: {
        type: "string"
      }
    },
    lastErrorMessage: {
      shape: {
        type: "string"
      }
    },
    lastStatusChangeTime: {
      shape: {
        type: "timestamp"
      }
    }
  }
};
