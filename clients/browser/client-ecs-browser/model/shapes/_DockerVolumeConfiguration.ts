import { _StringMap } from "./_StringMap";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _DockerVolumeConfiguration: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    scope: {
      shape: {
        type: "string"
      }
    },
    autoprovision: {
      shape: {
        type: "boolean"
      }
    },
    driver: {
      shape: {
        type: "string"
      }
    },
    driverOpts: {
      shape: _StringMap
    },
    labels: {
      shape: _StringMap
    }
  }
};
