import { _ResourceLocation } from "./_ResourceLocation";
import { _TagList } from "./_TagList";
import { _InstanceHardware } from "./_InstanceHardware";
import { _InstanceNetworking } from "./_InstanceNetworking";
import { _InstanceState } from "./_InstanceState";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Instance: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    name: {
      shape: {
        type: "string"
      }
    },
    arn: {
      shape: {
        type: "string"
      }
    },
    supportCode: {
      shape: {
        type: "string"
      }
    },
    createdAt: {
      shape: {
        type: "timestamp"
      }
    },
    location: {
      shape: _ResourceLocation
    },
    resourceType: {
      shape: {
        type: "string"
      }
    },
    tags: {
      shape: _TagList
    },
    blueprintId: {
      shape: {
        type: "string"
      }
    },
    blueprintName: {
      shape: {
        type: "string"
      }
    },
    bundleId: {
      shape: {
        type: "string"
      }
    },
    isStaticIp: {
      shape: {
        type: "boolean"
      }
    },
    privateIpAddress: {
      shape: {
        type: "string"
      }
    },
    publicIpAddress: {
      shape: {
        type: "string"
      }
    },
    ipv6Address: {
      shape: {
        type: "string"
      }
    },
    hardware: {
      shape: _InstanceHardware
    },
    networking: {
      shape: _InstanceNetworking
    },
    state: {
      shape: _InstanceState
    },
    username: {
      shape: {
        type: "string"
      }
    },
    sshKeyName: {
      shape: {
        type: "string"
      }
    }
  }
};
