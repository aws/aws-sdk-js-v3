import { _VirtualMFADevice } from "./_VirtualMFADevice";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateVirtualMFADeviceOutput: _Structure_ = {
  type: "structure",
  required: ["VirtualMFADevice"],
  members: {
    VirtualMFADevice: {
      shape: _VirtualMFADevice
    }
  }
};
