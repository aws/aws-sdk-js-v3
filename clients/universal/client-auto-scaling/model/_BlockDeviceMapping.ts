import { _Ebs } from "./_Ebs";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _BlockDeviceMapping: _Structure_ = {
  type: "structure",
  required: ["DeviceName"],
  members: {
    VirtualName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    DeviceName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Ebs: {
      shape: _Ebs
    },
    NoDevice: {
      shape: {
        type: "boolean"
      }
    }
  }
};
