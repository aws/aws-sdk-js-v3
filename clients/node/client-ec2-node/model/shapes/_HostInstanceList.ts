import { List as _List_ } from "@aws-sdk/types";
import { _HostInstance } from "./_HostInstance";

export const _HostInstanceList: _List_ = {
  type: "list",
  member: {
    shape: _HostInstance,
    locationName: "item"
  }
};
