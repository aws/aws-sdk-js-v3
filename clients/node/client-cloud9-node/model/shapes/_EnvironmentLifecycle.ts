import { Structure as _Structure_ } from "@aws-sdk/types";

export const _EnvironmentLifecycle: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    status: {
      shape: {
        type: "string"
      }
    },
    reason: {
      shape: {
        type: "string"
      }
    },
    failureResource: {
      shape: {
        type: "string"
      }
    }
  }
};
