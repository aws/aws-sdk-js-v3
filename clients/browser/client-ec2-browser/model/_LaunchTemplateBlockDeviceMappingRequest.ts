import { _LaunchTemplateEbsBlockDeviceRequest } from "./_LaunchTemplateEbsBlockDeviceRequest";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _LaunchTemplateBlockDeviceMappingRequest: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    DeviceName: {
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
      shape: _LaunchTemplateEbsBlockDeviceRequest
    },
    NoDevice: {
      shape: {
        type: "string"
      }
    }
  }
};
