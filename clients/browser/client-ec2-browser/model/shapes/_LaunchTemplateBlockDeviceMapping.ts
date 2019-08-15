import { _LaunchTemplateEbsBlockDevice } from "./_LaunchTemplateEbsBlockDevice";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _LaunchTemplateBlockDeviceMapping: _Structure_ = {
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
      shape: _LaunchTemplateEbsBlockDevice,
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
