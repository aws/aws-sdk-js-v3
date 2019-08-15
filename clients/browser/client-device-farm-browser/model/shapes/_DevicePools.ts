import { List as _List_ } from "@aws-sdk/types";
import { _DevicePool } from "./_DevicePool";

export const _DevicePools: _List_ = {
  type: "list",
  member: {
    shape: _DevicePool
  }
};
