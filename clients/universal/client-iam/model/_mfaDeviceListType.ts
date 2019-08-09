import { List as _List_ } from "@aws-sdk/types";
import { _MFADevice } from "./_MFADevice";

export const _mfaDeviceListType: _List_ = {
  type: "list",
  member: {
    shape: _MFADevice
  }
};
