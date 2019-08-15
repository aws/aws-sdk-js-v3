import { _Counters } from "./_Counters";
import { _DeviceMinutes } from "./_DeviceMinutes";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Suite: _Structure_ = {
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
    deviceMinutes: {
      shape: _DeviceMinutes
    }
  }
};
