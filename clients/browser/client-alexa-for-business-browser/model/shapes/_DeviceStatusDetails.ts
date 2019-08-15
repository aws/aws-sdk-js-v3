import { List as _List_ } from "@aws-sdk/types";
import { _DeviceStatusDetail } from "./_DeviceStatusDetail";

export const _DeviceStatusDetails: _List_ = {
  type: "list",
  member: {
    shape: _DeviceStatusDetail
  }
};
