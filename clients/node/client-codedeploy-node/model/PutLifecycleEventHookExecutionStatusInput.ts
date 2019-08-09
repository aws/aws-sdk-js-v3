import { Structure as _Structure_ } from "@aws-sdk/types";

export const PutLifecycleEventHookExecutionStatusInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    deploymentId: {
      shape: {
        type: "string"
      }
    },
    lifecycleEventHookExecutionId: {
      shape: {
        type: "string"
      }
    },
    status: {
      shape: {
        type: "string"
      }
    }
  }
};
