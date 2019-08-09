import { _EbsInstanceBlockDeviceSpecification } from "./_EbsInstanceBlockDeviceSpecification";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _InstanceBlockDeviceMappingSpecification: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    DeviceName: {
      shape: {
        type: "string"
      },
      locationName: "deviceName"
    },
    Ebs: {
      shape: _EbsInstanceBlockDeviceSpecification,
      locationName: "ebs"
    },
    NoDevice: {
      shape: {
        type: "string"
      },
      locationName: "noDevice"
    },
    VirtualName: {
      shape: {
        type: "string"
      },
      locationName: "virtualName"
    }
  }
};
