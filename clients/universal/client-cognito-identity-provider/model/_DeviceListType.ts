import { List as _List_ } from "@aws-sdk/types";
import { _DeviceType } from "./_DeviceType";

export const _DeviceListType: _List_ = {
  type: "list",
  member: {
    shape: _DeviceType
  }
};
