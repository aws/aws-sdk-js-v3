import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Build: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    BuildId: {
      shape: {
        type: "string"
      }
    },
    Name: {
      shape: {
        type: "string"
      }
    },
    Version: {
      shape: {
        type: "string"
      }
    },
    Status: {
      shape: {
        type: "string"
      }
    },
    SizeOnDisk: {
      shape: {
        type: "integer",
        min: 1
      }
    },
    OperatingSystem: {
      shape: {
        type: "string"
      }
    },
    CreationTime: {
      shape: {
        type: "timestamp"
      }
    }
  }
};
