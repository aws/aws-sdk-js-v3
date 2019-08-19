import { _NetworkBindings } from "./_NetworkBindings";
import { _NetworkInterfaces } from "./_NetworkInterfaces";
import { _GpuIds } from "./_GpuIds";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Container: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    containerArn: {
      shape: {
        type: "string"
      }
    },
    taskArn: {
      shape: {
        type: "string"
      }
    },
    name: {
      shape: {
        type: "string"
      }
    },
    lastStatus: {
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
    },
    networkInterfaces: {
      shape: _NetworkInterfaces
    },
    healthStatus: {
      shape: {
        type: "string"
      }
    },
    cpu: {
      shape: {
        type: "string"
      }
    },
    memory: {
      shape: {
        type: "string"
      }
    },
    memoryReservation: {
      shape: {
        type: "string"
      }
    },
    gpuIds: {
      shape: _GpuIds
    }
  }
};
