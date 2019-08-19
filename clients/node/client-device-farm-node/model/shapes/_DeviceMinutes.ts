import { Structure as _Structure_ } from "@aws-sdk/types";

export const _DeviceMinutes: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    total: {
      shape: {
        type: "float"
      }
    },
    metered: {
      shape: {
        type: "float"
      }
    },
    unmetered: {
      shape: {
        type: "float"
      }
    }
  }
};
