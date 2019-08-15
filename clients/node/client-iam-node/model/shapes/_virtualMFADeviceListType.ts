import { List as _List_ } from "@aws-sdk/types";
import { _VirtualMFADevice } from "./_VirtualMFADevice";

export const _virtualMFADeviceListType: _List_ = {
  type: "list",
  member: {
    shape: _VirtualMFADevice
  }
};
