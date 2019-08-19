import { _EbsBlockDevice } from "./_EbsBlockDevice";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _BlockDeviceMapping: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    DeviceName: {
      shape: {
        type: "string"
      },
      locationName: "deviceName"
    },
    VirtualName: {
      shape: {
        type: "string"
      },
      locationName: "virtualName"
    },
    Ebs: {
      shape: _EbsBlockDevice,
      locationName: "ebs"
    },
    NoDevice: {
      shape: {
        type: "string"
      },
      locationName: "noDevice"
    }
  }
};
