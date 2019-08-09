import { _NetworkBindings } from "./_NetworkBindings";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ContainerStateChange: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    containerName: {
      shape: {
        type: "string"
      }
    },
    exitCode: {
      shape: {
        type: "integer"
      }
    },
    networkBindings: {
      shape: _NetworkBindings
    },
    reason: {
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
