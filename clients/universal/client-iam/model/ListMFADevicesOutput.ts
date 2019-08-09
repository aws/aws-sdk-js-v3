import { _mfaDeviceListType } from "./_mfaDeviceListType";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListMFADevicesOutput: _Structure_ = {
  type: "structure",
  required: ["MFADevices"],
  members: {
    MFADevices: {
      shape: _mfaDeviceListType
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
