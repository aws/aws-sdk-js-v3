import { Structure as _Structure_ } from "@aws-sdk/types";

export const _RollbackInfo: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    rollbackDeploymentId: {
      shape: {
        type: "string"
      }
    },
    rollbackTriggeringDeploymentId: {
      shape: {
        type: "string"
      }
    },
    rollbackMessage: {
      shape: {
        type: "string"
      }
    }
  }
};
