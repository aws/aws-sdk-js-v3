import { List as _List_ } from "@aws-sdk/types";
import { _InstanceStateChange } from "./_InstanceStateChange";

export const _InstanceStateChangeList: _List_ = {
  type: "list",
  member: {
    shape: _InstanceStateChange,
    locationName: "item"
  }
};
