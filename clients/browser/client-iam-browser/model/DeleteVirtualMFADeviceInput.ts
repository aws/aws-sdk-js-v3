import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteVirtualMFADeviceInput: _Structure_ = {
  type: "structure",
  required: ["SerialNumber"],
  members: {
    SerialNumber: {
      shape: {
        type: "string",
        min: 9
      }
    }
  }
};
