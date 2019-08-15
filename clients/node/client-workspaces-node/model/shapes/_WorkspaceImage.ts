import { _OperatingSystem } from "./_OperatingSystem";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _WorkspaceImage: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ImageId: {
      shape: {
        type: "string"
      }
    },
    Name: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Description: {
      shape: {
        type: "string",
        min: 1
      }
    },
    OperatingSystem: {
      shape: _OperatingSystem
    },
    State: {
      shape: {
        type: "string"
      }
    },
    RequiredTenancy: {
      shape: {
        type: "string"
      }
    },
    ErrorCode: {
      shape: {
        type: "string"
      }
    },
    ErrorMessage: {
      shape: {
        type: "string"
      }
    }
  }
};
