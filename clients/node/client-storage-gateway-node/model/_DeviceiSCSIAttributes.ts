import { Structure as _Structure_ } from "@aws-sdk/types";

export const _DeviceiSCSIAttributes: _Structure_ = {
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
    ChapEnabled: {
      shape: {
        type: "boolean"
      }
    }
  }
};
