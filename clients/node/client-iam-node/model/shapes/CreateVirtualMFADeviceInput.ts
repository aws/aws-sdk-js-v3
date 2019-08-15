import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateVirtualMFADeviceInput: _Structure_ = {
  type: "structure",
  required: ["VirtualMFADeviceName"],
  members: {
    Path: {
      shape: {
        type: "string",
        min: 1
      }
    },
    VirtualMFADeviceName: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
