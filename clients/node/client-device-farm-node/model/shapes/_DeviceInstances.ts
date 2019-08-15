import { List as _List_ } from "@aws-sdk/types";
import { _DeviceInstance } from "./_DeviceInstance";

export const _DeviceInstances: _List_ = {
  type: "list",
  member: {
    shape: _DeviceInstance
  }
};
