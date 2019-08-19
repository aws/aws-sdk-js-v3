import { _NetworkBindings } from "./_NetworkBindings";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const SubmitContainerStateChangeInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    cluster: {
      shape: {
        type: "string"
      }
    },
    task: {
      shape: {
        type: "string"
      }
    },
    containerName: {
      shape: {
        type: "string"
      }
    },
    status: {
      shape: {
        type: "string"
      }
    },
    exitCode: {
      shape: {
        type: "integer"
      }
    },
    reason: {
      shape: {
        type: "string"
      }
    },
    networkBindings: {
      shape: _NetworkBindings
    }
  }
};
