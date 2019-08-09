import { _EbsBlockDevice } from "./_EbsBlockDevice";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _BlockDeviceMapping: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    DeviceName: {
      shape: {
        type: "string"
      }
    },
    NoDevice: {
      shape: {
        type: "string"
      }
    },
    VirtualName: {
      shape: {
        type: "string"
      }
    },
    Ebs: {
      shape: _EbsBlockDevice
    }
  }
};
