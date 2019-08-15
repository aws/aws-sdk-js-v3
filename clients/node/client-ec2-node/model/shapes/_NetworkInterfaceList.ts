import { List as _List_ } from "@aws-sdk/types";
import { _NetworkInterface } from "./_NetworkInterface";

export const _NetworkInterfaceList: _List_ = {
  type: "list",
  member: {
    shape: _NetworkInterface,
    locationName: "item"
  }
};
