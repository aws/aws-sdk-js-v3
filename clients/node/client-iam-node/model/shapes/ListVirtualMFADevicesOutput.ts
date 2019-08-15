import { _virtualMFADeviceListType } from "./_virtualMFADeviceListType";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListVirtualMFADevicesOutput: _Structure_ = {
  type: "structure",
  required: ["VirtualMFADevices"],
  members: {
    VirtualMFADevices: {
      shape: _virtualMFADeviceListType
    },
    IsTruncated: {
      shape: {
        type: "boolean"
      }
    },
    Marker: {
      shape: {
        type: "string"
      }
    }
  }
};
