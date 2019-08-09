import { _CPU } from "./_CPU";
import { _Resolution } from "./_Resolution";
import { _DeviceInstances } from "./_DeviceInstances";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Device: _Structure_ = {
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
    manufacturer: {
      shape: {
        type: "string"
      }
    },
    model: {
      shape: {
        type: "string"
      }
    },
    modelId: {
      shape: {
        type: "string"
      }
    },
    formFactor: {
      shape: {
        type: "string"
      }
    },
    platform: {
      shape: {
        type: "string"
      }
    },
    os: {
      shape: {
        type: "string"
      }
    },
    cpu: {
      shape: _CPU
    },
    resolution: {
      shape: _Resolution
    },
    heapSize: {
      shape: {
        type: "integer"
      }
    },
    memory: {
      shape: {
        type: "integer"
      }
    },
    image: {
      shape: {
        type: "string"
      }
    },
    carrier: {
      shape: {
        type: "string"
      }
    },
    radio: {
      shape: {
        type: "string"
      }
    },
    remoteAccessEnabled: {
      shape: {
        type: "boolean"
      }
    },
    remoteDebugEnabled: {
      shape: {
        type: "boolean"
      }
    },
    fleetType: {
      shape: {
        type: "string"
      }
    },
    fleetName: {
      shape: {
        type: "string"
      }
    },
    instances: {
      shape: _DeviceInstances
    },
    availability: {
      shape: {
        type: "string"
      }
    }
  }
};
