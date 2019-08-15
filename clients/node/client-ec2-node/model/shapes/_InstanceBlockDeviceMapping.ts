import { _EbsInstanceBlockDevice } from "./_EbsInstanceBlockDevice";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _InstanceBlockDeviceMapping: _Structure_ = {
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
      shape: _EbsInstanceBlockDevice,
      locationName: "ebs"
    }
  }
};
