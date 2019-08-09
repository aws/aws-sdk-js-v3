import { Structure as _Structure_ } from "@aws-sdk/types";

export const _VolumeiSCSIAttributes: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    TargetARN: {
      shape: {
        type: "string",
        min: 50
      }
    },
    NetworkInterfaceId: {
      shape: {
        type: "string"
      }
    },
    NetworkInterfacePort: {
      shape: {
        type: "integer"
      }
    },
    LunNumber: {
      shape: {
        type: "integer",
        min: 1
      }
    },
    ChapEnabled: {
      shape: {
        type: "boolean"
      }
    }
  }
};
