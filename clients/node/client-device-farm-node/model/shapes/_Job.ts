import { _Counters } from "./_Counters";
import { _Device } from "./_Device";
import { _DeviceMinutes } from "./_DeviceMinutes";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Job: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    arn: {
      shape: {
        type: "string",
        min: 32
      }
    },
    name: {
      shape: {
        type: "string"
      }
    },
    type: {
      shape: {
        type: "string"
      }
    },
    created: {
      shape: {
        type: "timestamp"
      }
    },
    status: {
      shape: {
        type: "string"
      }
    },
    result: {
      shape: {
        type: "string"
      }
    },
    started: {
      shape: {
        type: "timestamp"
      }
    },
    stopped: {
      shape: {
        type: "timestamp"
      }
    },
    counters: {
      shape: _Counters
    },
    message: {
      shape: {
        type: "string"
      }
    },
    device: {
      shape: _Device
    },
    instanceArn: {
      shape: {
        type: "string",
        min: 32
      }
    },
    deviceMinutes: {
      shape: _DeviceMinutes
    },
    videoEndpoint: {
      shape: {
        type: "string"
      }
    },
    videoCapture: {
      shape: {
        type: "boolean"
      }
    }
  }
};
