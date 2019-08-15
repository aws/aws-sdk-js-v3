import { List as _List_ } from "@aws-sdk/types";
import { _DeviceData } from "./_DeviceData";

export const _DeviceDataList: _List_ = {
  type: "list",
  member: {
    shape: _DeviceData
  }
};
