import { Structure as _Structure_ } from "@aws-sdk/types";

export const _InstanceEntry: _Structure_ = {
  type: "structure",
  required: [
    "sourceName",
    "instanceType",
    "portInfoSource",
    "availabilityZone"
  ],
  members: {
    sourceName: {
      shape: {
        type: "string"
      }
    },
    instanceType: {
      shape: {
        type: "string"
      }
    },
    portInfoSource: {
      shape: {
        type: "string"
      }
    },
    userData: {
      shape: {
        type: "string"
      }
    },
    availabilityZone: {
      shape: {
        type: "string"
      }
    }
  }
};
