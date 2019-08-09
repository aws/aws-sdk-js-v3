import { _InstancePlatformList } from "./_InstancePlatformList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Bundle: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    price: {
      shape: {
        type: "float"
      }
    },
    cpuCount: {
      shape: {
        type: "integer"
      }
    },
    diskSizeInGb: {
      shape: {
        type: "integer"
      }
    },
    bundleId: {
      shape: {
        type: "string"
      }
    },
    instanceType: {
      shape: {
        type: "string"
      }
    },
    isActive: {
      shape: {
        type: "boolean"
      }
    },
    name: {
      shape: {
        type: "string"
      }
    },
    power: {
      shape: {
        type: "integer"
      }
    },
    ramSizeInGb: {
      shape: {
        type: "float"
      }
    },
    transferPerMonthInGb: {
      shape: {
        type: "integer"
      }
    },
    supportedPlatforms: {
      shape: _InstancePlatformList
    }
  }
};
