import { _Device } from "./_Device";
import { _DeviceMinutes } from "./_DeviceMinutes";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _RemoteAccessSession: _Structure_ = {
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
    message: {
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
    device: {
      shape: _Device
    },
    instanceArn: {
      shape: {
        type: "string",
        min: 32
      }
    },
    remoteDebugEnabled: {
      shape: {
        type: "boolean"
      }
    },
    remoteRecordEnabled: {
      shape: {
        type: "boolean"
      }
    },
    remoteRecordAppArn: {
      shape: {
        type: "string",
        min: 32
      }
    },
    hostAddress: {
      shape: {
        type: "string"
      }
    },
    clientId: {
      shape: {
        type: "string"
      }
    },
    billingMethod: {
      shape: {
        type: "string"
      }
    },
    deviceMinutes: {
      shape: _DeviceMinutes
    },
    endpoint: {
      shape: {
        type: "string"
      }
    },
    deviceUdid: {
      shape: {
        type: "string"
      }
    },
    interactionMode: {
      shape: {
        type: "string"
      }
    },
    skipAppResign: {
      shape: {
        type: "boolean"
      }
    }
  }
};
