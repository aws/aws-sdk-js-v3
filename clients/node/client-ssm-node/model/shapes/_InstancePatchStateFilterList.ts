import { List as _List_ } from "@aws-sdk/types";
import { _InstancePatchStateFilter } from "./_InstancePatchStateFilter";

export const _InstancePatchStateFilterList: _List_ = {
  type: "list",
  member: {
    shape: _InstancePatchStateFilter
  }
};
