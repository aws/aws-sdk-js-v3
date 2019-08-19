import { List as _List_ } from "@aws-sdk/types";
import { _VTLDevice } from "./_VTLDevice";

export const _VTLDevices: _List_ = {
  type: "list",
  member: {
    shape: _VTLDevice
  }
};
