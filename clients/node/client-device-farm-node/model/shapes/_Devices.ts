import { List as _List_ } from "@aws-sdk/types";
import { _Device } from "./_Device";

export const _Devices: _List_ = {
  type: "list",
  member: {
    shape: _Device
  }
};
