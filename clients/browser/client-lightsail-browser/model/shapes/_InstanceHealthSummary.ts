import { Structure as _Structure_ } from "@aws-sdk/types";

export const _InstanceHealthSummary: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    instanceName: {
      shape: {
        type: "string"
      }
    },
    instanceHealth: {
      shape: {
        type: "string"
      }
    },
    instanceHealthReason: {
      shape: {
        type: "string"
      }
    }
  }
};
