import { _DeviceiSCSIAttributes } from "./_DeviceiSCSIAttributes";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _VTLDevice: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    VTLDeviceARN: {
      shape: {
        type: "string",
        min: 50
      }
    },
    VTLDeviceType: {
      shape: {
        type: "string"
      }
    },
    VTLDeviceVendor: {
      shape: {
        type: "string"
      }
    },
    VTLDeviceProductIdentifier: {
      shape: {
        type: "string"
      }
    },
    DeviceiSCSIAttributes: {
      shape: _DeviceiSCSIAttributes
    }
  }
};
