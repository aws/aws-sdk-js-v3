import { List as _List_ } from "@aws-sdk/types";
import { _PlatformDevice } from "./_PlatformDevice";

export const _PlatformDevices: _List_ = {
  type: "list",
  member: {
    shape: _PlatformDevice
  }
};
