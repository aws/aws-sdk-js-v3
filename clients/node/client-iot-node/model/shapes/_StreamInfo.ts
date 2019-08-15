import { _StreamFiles } from "./_StreamFiles";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _StreamInfo: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    streamId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    streamArn: {
      shape: {
        type: "string"
      }
    },
    streamVersion: {
      shape: {
        type: "integer"
      }
    },
    description: {
      shape: {
        type: "string"
      }
    },
    files: {
      shape: _StreamFiles
    },
    createdAt: {
      shape: {
        type: "timestamp"
      }
    },
    lastUpdatedAt: {
      shape: {
        type: "timestamp"
      }
    },
    roleArn: {
      shape: {
        type: "string",
        min: 20
      }
    }
  }
};
